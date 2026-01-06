import { useState } from 'react'

import './App.css'
import SearchBar from '../SearchBar/SearchBar.jsx'

function App() {

  function handleSearch(searchValue) {
    alert(`Searching for ${searchValue}`)
  }

  return (
    <>
    <SearchBar onSearch={handleSearch} />
    </>
  )
}

export default App
