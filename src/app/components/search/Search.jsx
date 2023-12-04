import React from 'react'
import Styles from './search.module.css'
import { MdSearch } from 'react-icons/md'
const Search = ({ placeholder }) => {
  return (
    <div className={Styles.container}>
        <MdSearch />
        <input type="text" placeholder={placeholder} className={Styles.input} />
    </div>
  )
}

export default Search