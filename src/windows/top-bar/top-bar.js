import "./top-bar.css";

const topBar = (icon) => {
    const topBar = document.createElement("div");
    topBar.classList.add("app-window-top-bar");
    const appIcon = document.createElement("img");
    appIcon.classList.add("top-bar-icon");
    appIcon.src = icon;
    topBar.appendChild(appIcon);


    const rightSideIcons = document.createElement("div");

    const minimizeIcon = document.createElement("img");
    minimizeIcon.classList.add("top-bar-icon");
    minimizeIcon.classList.add("btn");
    setTimeout(() => minimizeIcon.src = require("../../img/minimize.svg"));
    rightSideIcons.appendChild(minimizeIcon);

    const closeIcon = document.createElement("img");
    closeIcon.classList.add("btn");
    closeIcon.classList.add("top-bar-icon");
    setTimeout(() => closeIcon.src = require("../../img/x.svg"), 0);
    rightSideIcons.appendChild(closeIcon);

    topBar.appendChild(rightSideIcons);

    const addMinimizeFunctionality = (makeInvisible) => minimizeIcon.onclick = () => makeInvisible();

    return {dom: topBar, addMinimizeFunctionality};
};

export default topBar;