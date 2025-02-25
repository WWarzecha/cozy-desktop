const audioManager = async (apiUrl, currentSong) => {
    let data;
    try {
        const response = await fetch(apiUrl);
        data = await response.json()
    } catch (err) {
        console.log(err);
        return;
    }
    let songs = data.songs;
    const audio = new Audio();
        
    const setSong = (id) => {
        let song = songs[id];
        audio.src = song.url;
        audio.loop = false;
        currentSong.url = song.url;
        currentSong.title = song.title;
        currentSong.author = song.author;
        currentSong.id = id;
    }
    const play = () => audio.play();
    const playNext = () => {setSong((currentSong.id + 1) % songs.length)};
    const playPrev = () => {setSong(((currentSong.id - 1) + songs.length) % songs.length)}
    const pause = () => audio.pause();
    const repeat = () => audio.loop = !audio.loop;
    const isPaused = () => audio.paused && audio.src;
    return {audio, setSong, play, playNext, playPrev, pause, repeat, isPaused, data};
};


export default audioManager;