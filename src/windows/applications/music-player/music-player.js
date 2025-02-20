import AppWindow from "../../app-window.js";
import createSongList from "./song-list/song-list.js";
import createControlBar from "./play-bar.js";
import createAudioManager from "./audio-manager.js";
import "./music-player.css";

const musicPlayer = (appManager) => {
    const url = "https://raw.githubusercontent.com/WWarzecha/cozy-desktop/json-apis/music-api/song-list.json";
    const icon = require("../../../img/music.svg");
    const musicPlayerWindow = new AppWindow(icon, appManager, 400, 300);
    const content = document.createElement("div");
    content.classList.add("music-app-content");
    musicPlayerWindow.insertContent(content);
    const audioManager = createAudioManager();
    const songListContainer = document.createElement("div");
    const controlBar = createControlBar(audioManager.play, audioManager.pause, audioManager.isPaused, audioManager.repeat)
    createSongList(url, songListContainer, (songUrl, title, author) => {
        audioManager.setSong(songUrl);
        controlBar.reset();
        controlBar.update(title, author);
    });
    content.appendChild(songListContainer);
    content.appendChild(audioManager.audio);
    content.appendChild(controlBar.container);
    return musicPlayerWindow;
};

export default musicPlayer;