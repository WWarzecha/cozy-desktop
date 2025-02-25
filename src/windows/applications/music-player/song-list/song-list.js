const createSongTile = (song, songId, setSong) => {
    const container = document.createElement("div");

    const title = document.createElement("div");
    title.textContent = song.title;
    container.appendChild(title);

    const author = document.createElement("div");
    author.textContent = song.author;
    container.appendChild(author);

    container.onclick = () => setSong(songId);
    return container;
}

async function createSongList(data, container, setSong){
    data.songs.forEach(song => {
        container.appendChild(createSongTile(song, data.songs.indexOf(song), setSong));
    });
};

export default createSongList;