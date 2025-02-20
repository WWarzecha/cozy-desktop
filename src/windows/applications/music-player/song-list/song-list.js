const createSongTile = (song, playSong) => {
    const container = document.createElement("div");

    const title = document.createElement("div");
    title.textContent = song.title;
    container.appendChild(title);

    const author = document.createElement("div");
    author.textContent = song.author;
    container.appendChild(author);

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

    data.songs.forEach(song => {
        container.appendChild(createSongTile(song, playSong));
    });
};

export default createSongList;