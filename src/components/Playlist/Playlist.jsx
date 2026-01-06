import SongCell from "../SearchResults/SongCell";

function Playlist({addedSongs, removeSong, name, rename}) {
    return (
        <>  
            <input
                type='text'
                value={name}
                onChange={(e) => rename(e.target.value)}
            />
            <br />
            { addedSongs.map((song) => {
                return (
                    <div key={song.id}>
                        <SongCell song={song}/>

                        <button className="removeSong" onClick={() => removeSong(song)}>-</button>
                    </div>
                )
            }) }

            <button>Save to Spotify</button>
        </>
    )
}

export default Playlist;