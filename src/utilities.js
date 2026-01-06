const baseUrl = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bee6890376msh1cccda064477cb3p1ed3c5jsn0d76411a0057',
		'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export async function get(query) {
    const url = baseUrl + query
    let songList = []
    try {
        const response = await fetch(url, options);
        
        if (response.ok) {
            const jsonData = await response.json();

            jsonData['data'].map((obj) => {
                
                const newSong = {
                    id: obj.id,
                    artist: toTitleCase(obj.artist.name),
                    title: obj.title,
                    album: obj.album.title
                }

                songList.push(newSong)
            })
            console.log(songList)
            return(songList)
        }
        
    } catch (error) {
        alert(error)
        console.error(error);
    }
}