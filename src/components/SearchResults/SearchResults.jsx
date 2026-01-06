import { useState, useEffect } from "react";
import { get } from "../../utilities";

import SongCell from "./SongCell";

function SearchResults({searchValue, addSong}) {
    const [songs, setSongs] = useState([{
                                id: 1,
                                title: "Bohemian Rhapsody",
                                artist: "Queen",
                                album: "A Night at the Opera"
                            },
                            {
                                id: 2,
                                title: "Imagine",
                                artist: "John Lennon",
                                album: "Imagine"
                            },
                            {
                                id: 3,
                                title: "Billie Jean",
                                artist: "Michael Jackson",
                                album: "Thriller"
                            }]);
    const endpoint = "/search/ " + searchValue

    // useEffect(() => {
    //     const response = get(endpoint).data
    //     setSongs((prev) => [response, ...prev])
    // }, [searchValue])

    function addSongToPlaylist(id) {
        const songToAdd = songs.find((song) => {
            return song.id === id
        })
        addSong(songToAdd)
    }

    return (
        <>
            { songs.map((song) => {
                return (
                    <div key={song.id}>
                        <SongCell song={song} add={addSongToPlaylist}/>
                        <button className="addSong" onClick={() => addSongToPlaylist(song.id)}>+</button> 
                    </div>
            );
            }) }
        </>
    )
}

export default SearchResults