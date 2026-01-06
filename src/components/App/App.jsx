import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import SearchResults from '../SearchResults/SearchResults.jsx'
import Playlist from '../Playlist/Playlist.jsx'
import { get } from "../../utilities";

function App() {

  const [playlist, setPlaylist] = useState([])

  const [playlistName, setPlaylistName] = useState("")

  const [searchResults, setSearchResults] = useState([])

  const addToPlaylist = (song) => {
    setPlaylist((prev) => [...prev, song])
  }

  const handleSearch = async (searchValue) => {
    try {
        const results = await get(searchValue);
        setSearchResults(results);
    } catch (error) {
        alert("Search failed:", error)
        console.error("Search failed:", error);
        setSearchResults([]);
    }
}

  const handleRemoval = (songToRemove) => {
    const newPlaylist = playlist.filter((song) => {
      return song.id !== songToRemove.id
    })

    setPlaylist(newPlaylist)
  }

  const handlePlaylistRename = (name) => {
    setPlaylistName(name)
  }
  
  return (
    <>
    <SearchBar onSearch={handleSearch} />

    <br />

    <SearchResults addSong={addToPlaylist} songList={searchResults}/>

    <Playlist addedSongs={playlist} removeSong={handleRemoval} name={playlistName} rename={handlePlaylistRename}/>
    </>
  )
}

export default App
