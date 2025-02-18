import './tool-bar.css'

const toolbar = (() => {
    const apps = {};
    const dom = document.getElementById("toolbar");
    const addApp = (id, icon, onclick) => {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("toolbar-img-container");
        const tile = document.createElement("img");
        tile.src = icon;
        tile.onclick = () => {
            onclick();
        };
        imgContainer.appendChild(tile);
        dom.appendChild(imgContainer);
        apps[id] = imgContainer;
        console.log(`Added app: `, id, apps[id]);
        makeActive(id);
    }
    const closeApp = (id) => {
        dom.removeChild(apps[id]);
        delete apps[id];
    };
    const makeActive = (id) => {
        document.querySelectorAll(".toolbar-img-container.active").forEach(el => {el.classList.remove("active")});
        if (apps[id] && apps[id].classList) {
            apps[id].classList.add("active");
        };
    };
    return {addApp, closeApp, makeActive};
})();

export default toolbar;