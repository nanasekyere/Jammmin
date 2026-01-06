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

  const handleSearch = (searchValue) => {
    alert(`Searching for ${searchValue}`)
  }

  const handleRemoval = (songToRemove) => {
    const newPlaylist = playlist.filter((song) => {
      return song.id !== songToRemove.id
    })

    setPlaylist(newPlaylist)
  }
  
  return (
    <>
    <SearchBar onSearch={handleSearch} />

    <br />

    <SearchResults addSong={addToPlaylist}/>

    <Playlist addedSongs={playlist} removeSong={handleRemoval}/>
    </>
  )
}

export default App
