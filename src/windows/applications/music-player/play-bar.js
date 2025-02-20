
const createButtonTypeButton = (iconImg) => {
    const button = document.createElement("button");
    button.type = "button";
    const icon = document.createElement("img");
    button.appendChild(icon);
    icon.src = iconImg;
    return button;
}
const prevButtonOnclick = () => {};
const playButtonOnclick = (play, pause, isPaused, icon, iconPlaying, iconPaused) => {
    if(isPaused()){
        play()
        icon.src = iconPaused;
    }
    else{
        pause();
        icon.src = iconPlaying;
    }
};


const createPlayBar = (play, pause, isPaused, repeat) => {
    const container = document.createElement("div");
    container.classList.add("play-bar");

    const iconPlaying = require("../../../img/play.svg");
    const iconPaused = require("../../../img/pause.svg")
    const playButton = createButtonTypeButton(iconPlaying);
    const prevButton = createButtonTypeButton(require("../../../img/prev.svg"));
    const nextButton = createButtonTypeButton(require("../../../img/next.svg"));
    const repeatButton = createButtonTypeButton(require("../../../img/repeat.svg"));
    playButton.onclick = () => playButtonOnclick(play, pause, isPaused, playButton.firstChild, iconPlaying, iconPaused);
    repeatButton.onclick = () => repeat();
    container.appendChild(prevButton);
    container.appendChild(playButton);
    container.appendChild(nextButton);
    container.appendChild(repeatButton);
    const reset = () => {
        playButton.firstChild.src = iconPlaying;
    }
    return {container, reset};
};

export default createPlayBar;