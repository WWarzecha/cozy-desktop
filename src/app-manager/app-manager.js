import toolbar from "../tool-bar/tool-bar";

const appManager = (() =>{
    let apps = {};
    const addApp = (app) => {
        apps[app.id] = app;
        document.body.appendChild(app.dom);
        toolbar.addApp(app.id, app.icon, () => showApp(app.id));
    };
    const minimizeApp = (id) => apps[id].makeInvisible();
    const showApp = (id) => apps[id].makeVisible();
    const getAppIconById = (id) => apps[id].icon;
    const closeApp = (id) => {
        toolbar.closeApp(id);
        document.body.removeChild(apps[id].dom);
        apps[id] = undefined;
    };
    return {addApp, minimizeApp, showApp, getAppIconById, closeApp};
})();


export default appManager;