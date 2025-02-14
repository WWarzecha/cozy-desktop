import "./styles.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import wallpaperLoader from "./wallpaper-loader";
import AppWindow from "./windows/app-window";

wallpaperLoader.load()
const app = new AppWindow();
document.body.appendChild(app.dom);
const app2 = new AppWindow();
document.body.appendChild(app2.dom);
