const wallpaperLoader = (() => {
    const load = () => 
    {   
        // 
        setTimeout(() => {
            const wallpaper = require("./img/wallpaper.gif")
            document.body.style.backgroundImage = `url(${wallpaper})`
         }, 0);
    };
    return {"load": load};
})();


export default wallpaperLoader;