const createSongTile = (song, setSong) => {
    const container = document.createElement("div");

    const title = document.createElement("div");
    title.textContent = song.title;
    container.appendChild(title);

    const author = document.createElement("div");
    author.textContent = song.author;
    container.appendChild(author);

    container.onclick = () => setSong(song.url, song.title, song.author);
    return container;
}

async function createSongList(url, container, setSong){
    let data;
    try {
        const response = await fetch(url);
        data = await response.json()
    } catch (err) {
        console.log(err);
        return;
    }

    data.songs.forEach(song => {
        container.appendChild(createSongTile(song, setSong));
    });
};

export default createSongList;