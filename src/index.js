import "./styles.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import wallpaperLoader from "./wallpaper-loader";
import AppWindow from "./windows/app-window";
import appManager from "./app-manager/app-manager";

wallpaperLoader.load()
const app = new AppWindow();
document.body.appendChild(app.dom);
appManager.addApp(app);
appManager.minimizeApp(app.id);
// let visibilityController = app.visibilityController;
// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");
// btn1.onclick = () => visibilityController.makeVisible();
// btn2.onclick = () => {
//     visibilityController.makeInvisible();
//     console.log("Dissapearasd");
// }
// document.body.appendChild(btn1);
// document.body.appendChild(btn2);


// const app2 = new AppWindow();
// document.body.appendChild(app2.dom);
