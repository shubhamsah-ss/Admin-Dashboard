import React from "react";
import Styles from "./viewProduct.module.css";
import Image from "next/image";
import { fetchProduct } from "@/app/_lib/utils/data";
import { updateProduct } from "@/app/_lib/utils/action";
const ViewProduct = async({ params }) => {

  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={Styles.container}>
      <div className={Styles.infoContainer}>
        <div className={Styles.imgContainer}>
          <Image src={product.img || "/noavatar.png"} alt="" fill />
        </div>
        <h2>{product.title}</h2>
      </div>
      <div className={Styles.formContainer}>
       <form action={updateProduct} className={Styles.form}>
        <input type="hidden" id="id" name="id" value={id} />
        <label htmlFor="title">Title</label>
       <input
          type="text"
          placeholder={product.title}
          name="title"
          id="title"
          
        />
        <label htmlFor="category">categoryegory</label>
        <select name="category" id="category" defaultValue={product.category}>
          <option value={product.category}>{product.category}</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <label htmlFor="price">Price</label>
        <input type="number" placeholder={product.price} name="price" id="price" />

        <label htmlFor="stock">Stock</label>
        <input type="number" placeholder={product.stock} name="stock" id="stock" />

        <label htmlFor="color">Color</label>
        <input type="text" placeholder={product.color} name="color" id="color" />

        <label htmlFor="size">Size</label>
        <input type="text" placeholder={product.size} name="size" id="size" />
        
        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          id="desc"
          rows="10"
          placeholder={product.desc}
        ></textarea>
        <button type="submit">Submit</button>
       </form>
      </div>
    </div>
  );
};

export default ViewProduct;
