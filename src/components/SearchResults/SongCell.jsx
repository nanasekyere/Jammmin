
function SongCell({song}) {
    return (
        <span>
            <h4>{song.title}</h4>
            <p>{song.artist} | {song.album}</p>

            <button className="addSong">+</button>
        </span>
    )
}

export default SongCell