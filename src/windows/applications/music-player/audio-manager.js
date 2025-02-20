const audioManager = () => {
    const audio = new Audio();
    // audio.controls = true;
    
    const setSong = (url) => audio.src = url;
    const play = () => audio.play();
    const pause = () => audio.pause();
    const repeat = () => audio.repeat();
    const isPaused = () => audio.paused && audio.src
    return {audio, setSong, play, pause, repeat, isPaused}
};


export default audioManager;