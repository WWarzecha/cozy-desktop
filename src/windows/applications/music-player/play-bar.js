
const createButtonTypeButton = (iconImg) => {
    const button = document.createElement("button");
    button.type = "button";
    const icon = document.createElement("img");
    button.appendChild(icon);
    icon.src = iconImg;
    return button;
}
const prevButtonOnclick = () => {};
const playButtonOnclick = (audio, icon, iconPlaying, iconPaused) => {
    if(audio.paused && audio.src){
        audio.play();
        icon.src = iconPaused;
    }
    else{
        audio.pause();
        icon.src = iconPlaying;
    }
};

const createPlayBar = (audio) => {
    const container = document.createElement("div");
    container.classList.add("play-bar");

    const iconPlaying = require("../../../img/play.svg");
    const iconPaused = require("../../../img/pause.svg")
    const playButton = createButtonTypeButton(iconPlaying);
    const prevButton = createButtonTypeButton(require("../../../img/prev.svg"));
    const nextButton = createButtonTypeButton(require("../../../img/next.svg"));
    const repeatButton = createButtonTypeButton(require("../../../img/repeat.svg"));
    playButton.onclick = () => playButtonOnclick(audio, playButton.firstChild, iconPlaying, iconPaused);
    container.appendChild(prevButton);
    container.appendChild(playButton);
    container.appendChild(nextButton);
    container.appendChild(repeatButton);

    return container;
};

export default createPlayBar;