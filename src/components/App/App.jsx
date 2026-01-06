import { useState } from 'react'

import './App.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import SearchResults from '../SearchResults/SearchResults.jsx'
import Playlist from '../Playlist/Playlist.jsx'

function App() {

  const [playlist, setPlaylist] = useState([])

  const addToPlaylist = (song) => {
    setPlaylist((prev) => [...prev, song])
  }

  function handleSearch(searchValue) {
    alert(`Searching for ${searchValue}`)
  }

  return (
    <>
    <SearchBar onSearch={handleSearch} />

    <br />

    <SearchResults addSong={addToPlaylist}/>

    <Playlist addedSongs={playlist} />
    </>
  )
}

export default App
