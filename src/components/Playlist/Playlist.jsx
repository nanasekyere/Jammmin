import SongCell from "../SearchResults/SongCell";

function Playlist({addedSongs}) {
    return (
        <>
            { addedSongs.map((song) => {
                return (
                    <div key={song.id}>
                        <SongCell song={song}/>
                    </div>
                )
            }) }

            <button>Save to Spotify</button>
        </>
    )
}

export default Playlist;