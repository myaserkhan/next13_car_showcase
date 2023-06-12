"use client"

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState('');

  const heandleSearch = () => {

  }

  return (
    <form className='searchbar' onSubmit={heandleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar