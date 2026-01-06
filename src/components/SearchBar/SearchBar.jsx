import {useState} from "react"

function SearchBar({onSearch}) {
    const [search, setSearch] = useState("")

    function handleInputChange(e)  {
        setSearch(e.target.value)
    }

    function handleSubmit(e)  {
        e.preventDefault()
        onSearch(search)
        setSearch("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            id="searchBar"
            type="text"
            value={search}
            onChange={handleInputChange}
            placeholder="Search for a song"
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar