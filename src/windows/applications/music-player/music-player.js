import AppWindow from "../../app-window.js";
import createSongList from "./song-list/song-list.js";
import createControlBar from "./play-bar.js";
import createAudioManager from "./audio-manager.js";
import "./music-player.css";

const fillContent = async (content) => {
    const url = "https://raw.githubusercontent.com/WWarzecha/cozy-desktop/json-apis/music-api/song-list.json";
    const currentSong = {title: undefined, author: undefined, url: undefined, id: 0};
    const audioManager = await createAudioManager(url, currentSong)
    const songListContainer = document.createElement("div");
    const playNext = () => {
        audioManager.playNext();
        controlBar.reset();
        controlBar.update();
    };
    const playPrev = () => {
        audioManager.playPrev();
        controlBar.reset();
        controlBar.update();
    }
    const controlBar = createControlBar(currentSong, audioManager.play, audioManager.pause, audioManager.isPaused, audioManager.repeat, playNext, playPrev);
    
    createSongList(audioManager.data, songListContainer, (songId, title, author) => {
        audioManager.setSong(songId);
        controlBar.reset();
        controlBar.update();
    });
    content.appendChild(songListContainer);
    content.appendChild(audioManager.audio);
    content.appendChild(controlBar.container);
}

const musicPlayer = (appManager) => {
    
    const icon = require("../../../img/music.svg");
    const musicPlayerWindow = new AppWindow(icon, appManager, 400, 300);
    const content = document.createElement("div");
    content.classList.add("music-app-content");
    musicPlayerWindow.insertContent(content);
    fillContent(content);

    return musicPlayerWindow;
};

export default musicPlayer;