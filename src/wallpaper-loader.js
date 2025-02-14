const wallpaperLoader = (() => {
    const load = () => 
    {   
        const wallpaper = require("./img/wallpaper.gif")
        document.body.style.backgroundImage = `url(${wallpaper})`;
    };
    return {"load": load};
})();


export default wallpaperLoader;