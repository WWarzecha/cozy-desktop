const appManager = (() =>{
    let apps = {};
    const addApp = (app) => apps[app.id] = app;
    const minimizeApp = (id) => apps[id].makeInvisible();
    const showApp = (id) => apps[id].makeVisible();
    return {addApp, minimizeApp, showApp};
})();


export default appManager;