import React from "react";
import Styles from "./add-product.module.css";

const AddProduct = () => {
  return (
    <div className={Styles.container}>
      <form className={Styles.form}>
        <input
          type="text"
          placeholder="Product title"
          name="title"
          id="title"
          required
        />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="Price" name="price" id="price" />
        <input type="number" placeholder="Stock" name="stock" id="stock" />
        <input type="text" placeholder="Color" name="color" id="color" />
        <input type="text" placeholder="Size" name="size" id="size" />
        <textarea
          name="desc"
          id="desc"
          rows="10"
          placeholder="Description"
        ></textarea>
        <button type="submit" className={Styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
