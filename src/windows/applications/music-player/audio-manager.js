const audioManager = () => {
    const audio = new Audio();
    
    const setSong = (url) => {
        audio.src = url;
        audio.loop = false;
    }
    const play = () => audio.play();
    const pause = () => audio.pause();
    const repeat = () => audio.loop = !audio.loop;
    const isPaused = () => audio.paused && audio.src;
    return {audio, setSong, play, pause, repeat, isPaused}
};


export default audioManager;