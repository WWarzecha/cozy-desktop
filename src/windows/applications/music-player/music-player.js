import AppWindow from "../../app-window";
import createSongList from "./song-list/song-list";


const musicPlayer = (appManager) => {
    const url = "https://raw.githubusercontent.com/WWarzecha/cozy-desktop/json-apis/music-api/song-list.json";
    const icon = require("../../../img/music.svg");
    const musicPlayerWindow = new AppWindow(icon, appManager, 400, 300);
    const content = document.createElement("div");
    content.textContent = "I'm amazing music player!";
    musicPlayerWindow.insertContent(content);
    const audioFile = new Audio();
    audioFile.controls = true;
    const songListContainer = document.createElement("div");
    const playSong = (url) => audioFile.src = url;
    createSongList(url, songListContainer, playSong);
    content.appendChild(songListContainer);
    content.appendChild(audioFile);
    return musicPlayerWindow;
};

export default musicPlayer;