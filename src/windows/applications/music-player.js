import AppWindow from "../app-window";

const musicPlayer = (appManager) => {
    const icon = require("../../img/music.svg");
    const musicPlayerWindow = new AppWindow(icon, appManager, 400, 300);
    const content = document.createElement("div");
    content.textContent = "I'm amazing music player!";
    musicPlayerWindow.insertContent(content);
    return musicPlayerWindow;
};

export default musicPlayer;