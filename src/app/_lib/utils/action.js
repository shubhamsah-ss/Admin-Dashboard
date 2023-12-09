"use server"
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connection";
import { Product, User } from "./models";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/app/auth";

export const addUser = async(formData) => {

    const { username, password, email, phone, isAdmin, isActive, address } = Object.fromEntries(formData);

    try {
        connectToDb()
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({ username, password: hashedPassword, email, phone, isAdmin, isActive, address })
        await newUser.save();
    } catch (error) {
        throw new Error("Failed to add user")
    }
    
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const updateUser = async(formData) => {

    const { id, username, password, email, phone, isAdmin, isActive, address } = Object.fromEntries(formData);

    try {
        const updatedFields = { username, password, email, phone, isAdmin, isActive, address }
        Object.keys(updatedFields).forEach( (key) => (updatedFields[key] === "" || undefined) && delete updatedFields[key] )
        await User.findByIdAndUpdate(id, updatedFields)
    } catch (error) {
        throw new Error("Failed to update user")
    }
    
    revalidatePath(`/dashboard/users/${id}`)
    return { success: true };
}

export const deleteUser = async(formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectToDb()
        await User.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed to delete user")
    }
    revalidatePath("/dashboard/users")
    return { success: true };
}

export const addProduct = async(formData) => {
    
    const { title, category, price, stock, color, size, desc } = Object.fromEntries(formData);

    try {
        connectToDb()
        
        const newProduct = new Product({ title, category, price, stock, color, size, desc })
        await newProduct.save();
    } catch (error) {
        throw new Error("Failed to add product")
    }
    
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const updateProduct = async(formData) => {
    
    const { id, title, category, price, stock, color, size, desc } = Object.fromEntries(formData);

    try {
        const updatedFields = { title, category, price, stock, color, size, desc }
        Object.keys(updatedFields).forEach( (key) => (updatedFields[key] === "" || undefined) && delete updatedFields[key] )
        await Product.findByIdAndUpdate(id, updatedFields)
    } catch (error) {
        throw new Error("Failed to update product")
    }
    
    revalidatePath(`/dashboard/products/${id}`)
    return { success: true };
}

export const deleteProduct = async(formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectToDb()
        await Product.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed to delete product")
    }
    revalidatePath(`/dashboard/products`)
    return { success: true };
}

export const authenticate = async(formData) => {
    const { username, password } = Object.fromEntries(formData)

    try {

        await signIn("credentials", { username, password })
        
    } catch (error) {
        return {error: "Wrong credentials!"}
    }
}