import SongCell from "./SongCell";

function SearchResults({addSong, songList}) {
    function addSongToPlaylist(id) {
        const songToAdd = songList.find((song) => {
            return song.id === id
        })
        addSong(songToAdd)
    }

    return (
        <>
            { songList.map((song) => {
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