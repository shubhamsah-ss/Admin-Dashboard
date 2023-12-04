import { connectToDb } from "./connection"
import { Product, User } from "./models"

export const fetchUsers = async(q, page) => {

    const regex = new RegExp(q,"i")

    const itemsPerPage = 1

    try {
        connectToDb()
        const count = await User.find({ username: { $regex: regex}}).count()
        const users = await User.find({username: { $regex: regex }}).limit(itemsPerPage).skip(itemsPerPage * (page - 1))
        return { count, users }
    } catch (error) {
        throw new Error("Failed to fetch users")
    }
}

export const fetchProducts = async(q, page) => {
    const regex = new RegExp(q,"i")

    const itemsPerPage = 1
    try {
        connectToDb()
        const count = await Product.find({ title: { $regex: regex}}).count()
        const products = await Product.find({title: { $regex: regex}}).limit(itemsPerPage).skip(itemsPerPage * (page - 1))
        return { count, products }
    } catch (error) {
        throw new Error("Failed to fetch products")
    }
}