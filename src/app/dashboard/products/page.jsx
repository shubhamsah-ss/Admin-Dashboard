import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Styles from './products.module.css'
import Pagination from '@/app/components/pagination/Pagination'
import Search from '@/app/components/search/Search'

const Products = () => {
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
          <tr>
            <td>
              <div className={Styles.product}>
                <Image src={"/product-not-found.png"} alt="" width={75} height={75} className={Styles.productImage} />
              Rahul Jakar
              </div>
            </td>
            <td>Description</td>
            <td>100</td>
            <td>{new Date().toISOString()}</td>
            <td>
              75
            </td>
            <td>
            <div className={Styles.buttons}>
                <Link href={`/dashboard/users/`}>
                <button className={`${Styles.button} ${Styles.view}`}>View</button>
                </Link>
                <Link href={`/dashboard/users/`}>
                <button className={`${Styles.button} ${Styles.delete}`}>Delete</button>
                </Link>
              </div>
            </td>
            
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default Products