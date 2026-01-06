import { useState } from 'react'

import './App.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import SearchResults from '../SearchResults/SearchResults.jsx'

function App() {

  function handleSearch(searchValue) {
    alert(`Searching for ${searchValue}`)
  }

  return (
    <>
    <SearchBar onSearch={handleSearch} />

    <br />

    <SearchResults />
    </>
  )
}

export default App
