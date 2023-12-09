import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "./products.module.css";
import Pagination from "@/app/components/pagination/Pagination";
import Search from "@/app/components/search/Search";
import { fetchProducts } from "@/app/_lib/utils/data";
import { deleteProduct } from "@/app/_lib/utils/action";

const Products = async ({ searchParams }) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, products } = await fetchProducts(q, page);

  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <Search placeholder={"Search product"} />
        <Link href={"/dashboard/products/add-product"}>
          <button className={Styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>
                <div className={Styles.product}>
                  <Image
                    src={item.img || "/product-not-found.png"}
                    alt=""
                    width={75}
                    height={75}
                    className={Styles.productImage}
                  />
                  { item.title}
                </div>
              </td>
              <td>{item.desc}</td>
              <td>{item.price}</td>
              <td>{item.createdAt?.toString().slice(4,16)}</td>
              <td>{item.stock}</td>
              <td>
                <div className={Styles.buttons}>
                  <Link href={`/dashboard/products/${item._id}`}>
                    <button className={`${Styles.button} ${Styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                  <input type="hidden" name="id" value={item.id} />
                  <button type="submit" className={`${Styles.button} ${Styles.delete}`}>Delete</button>
                </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Products;
