const createSongTile = (song, playSong) => {
    const container = document.createElement("div");

    const title = document.createElement("div");
    title.textContent = song.title;
    container.appendChild(title);

    const genre = document.createElement("div");
    genre.textContent = song.genre;
    container.appendChild(genre);

    container.onclick = () => playSong(song.url);
    return container;
}

async function createSongList(url, container, playSong){
    
    let data;
    try {
        const response = await fetch(url);
        data = await response.json()
    } catch (err) {
        console.log(err);
        return;
    }

    console.log("AMM data", data);

    data.songs.forEach(song => {
        container.appendChild(createSongTile(song, playSong));
    });
    console.log("hello", container);
    return container;
};

export default createSongList;