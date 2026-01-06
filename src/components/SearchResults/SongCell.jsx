
function SongCell({song}) {
    
    return (
        <span>
            <h4>{song.title}</h4>
            <p>{song.artist} | {song.album}</p>
        </span>
    )
}

export default SongCell