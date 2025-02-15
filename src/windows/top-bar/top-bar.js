import "./top-bar.css";

const topBar = (icon) => {
    const topBar = document.createElement("div");
    topBar.classList.add("app-window-top-bar");
    const appIcon = document.createElement("img");
    appIcon.src = icon;
    topBar.appendChild(appIcon);

    const xIcon = document.createElement("img");
    xIcon.classList.add("x-btn");
    setTimeout(() => xIcon.src = require("../../img/x.svg"), 0);
    topBar.appendChild(xIcon);

    return topBar;
};

export default topBar;