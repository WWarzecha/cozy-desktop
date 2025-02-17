import './desktop-icon.css';

const desktopIcon = (icon, title, runApp) => {
    const container = document.createElement("div");
    container.classList.add("desktop-icon-container");
    const appIcon = document.createElement("img");
    appIcon.src = icon;
    container.appendChild(appIcon);
    const appTitle = document.createElement("p");
    appTitle.textContent = title;
    container.appendChild(appTitle);
    container.onclick = runApp;
    return container;
};

export default desktopIcon;