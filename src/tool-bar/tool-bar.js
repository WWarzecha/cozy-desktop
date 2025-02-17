import './tool-bar.css'

const toolbar = (() => {
    const apps = {};
    const dom = document.getElementById("toolbar");
    const addApp = (id, icon, onclick) => {
        const tile = document.createElement("img");
        tile.src = icon;
        tile.onclick = onclick;
        dom.appendChild(tile);
        apps[id] = tile;
    }
    const closeApp = (id) => {
        dom.removeChild(apps[id]);
    };
    console.log(dom);
    return {addApp, closeApp};
})();

export default toolbar;