import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authConfig";
import { connectToDb } from "./_lib/utils/connection";
import { User } from "./_lib/utils/models";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if(user) {
        token.username = user.username
        token.img = user.img
      }

      return token
    },
    async session({ token, session }) {
      if(token) {
        session.user.username = token.username
        session.user.img = token.img
      }

      return session
    }
  }
});
