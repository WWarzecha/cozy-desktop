import AppWindow from "../../app-window.js";
import createSongList from "./song-list/song-list.js";
import createPlayBar from "./play-bar.js";
import "./music-player.css"

const musicPlayer = (appManager) => {
    const url = "https://raw.githubusercontent.com/WWarzecha/cozy-desktop/json-apis/music-api/song-list.json";
    const icon = require("../../../img/music.svg");
    const musicPlayerWindow = new AppWindow(icon, appManager, 400, 300);
    const content = document.createElement("div");
    content.textContent = "I'm amazing music player!";
    musicPlayerWindow.insertContent(content);
    const audio = new Audio();
    audio.controls = true;
    const songListContainer = document.createElement("div");
    const playSong = (url) => audio.src = url;
    createSongList(url, songListContainer, playSong);
    content.appendChild(songListContainer);
    content.appendChild(audio);
    content.appendChild(createPlayBar(audio));
    return musicPlayerWindow;
};

export default musicPlayer;