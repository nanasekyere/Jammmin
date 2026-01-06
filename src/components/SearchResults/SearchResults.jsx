import { useState, useEffect } from "react";
import { get } from "../../utilities";

import SongCell from "./SongCell";

function SearchResults({searchValue}) {
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
    //     setSongs((prev) => [prev])
    // }, [searchValue])

    return (
        <>
            { songs.map((song) => {
                return (
                    <div key={song.id}>
                        <SongCell song={song}/> 
                    </div>
            );
            }) }
        </>
    )
}

export default SearchResults