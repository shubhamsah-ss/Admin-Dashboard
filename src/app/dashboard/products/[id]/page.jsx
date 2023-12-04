import React from "react";
import Styles from "./viewProduct.module.css";
import Image from "next/image";
const ViewUser = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.infoContainer}>
        <div className={Styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        <h2>Iphone</h2>
      </div>
      <div className={Styles.formContainer}>
       <form className={Styles.form}>
        <label htmlFor="title">Title</label>
       <input
          type="text"
          placeholder="Product title"
          name="title"
          id="title"
          required
        />
        <label htmlFor="cat">Category</label>
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <label htmlFor="price">Price</label>
        <input type="number" placeholder="Price" name="price" id="price" />

        <label htmlFor="stock">Stock</label>
        <input type="number" placeholder="Stock" name="stock" id="stock" />

        <label htmlFor="color">Color</label>
        <input type="text" placeholder="Color" name="color" id="color" />

        <label htmlFor="size">Size</label>
        <input type="text" placeholder="Size" name="size" id="size" />
        
        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          id="desc"
          rows="10"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
       </form>
      </div>
    </div>
  );
};

export default ViewUser;
