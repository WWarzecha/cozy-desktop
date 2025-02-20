import "./styles.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import wallpaperLoader from "./wallpaper-loader";
import AppWindow from "./windows/app-window";
import appManager from "./app-manager/app-manager";
import desktopIcon from "./desktop-icon/desktop-icon";
import musicPlayer from "./windows/applications/music-player/music-player.js";

wallpaperLoader.load()
const icon = require("./img/anchor.svg");
const appDeskIc = desktopIcon(icon, "App", () => {const app = new AppWindow(icon, appManager);
    appManager.addApp(app);
});
const musicIcon = require("./img/music.svg");
const anotherdescic = desktopIcon(musicIcon, "music", () => {
    const app = musicPlayer(appManager);
    appManager.addApp(app);
});
document.body.appendChild(appDeskIc);
document.body.appendChild(anotherdescic);
anotherdescic.click();
