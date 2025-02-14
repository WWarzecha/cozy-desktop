import "./app-window.css"

const addWindowDOM = (width = 200, height = 150) => {
    const dom = document.createElement("div");
    dom.classList.add("app-window");
    dom.style.width = `${width}px`;
    dom.style.height = `${height}px`;
    return dom;
};

const addTopBar = (dom) => {
    const topBar = document.createElement("div");
    topBar.classList.add("app-window-top-bar");
    dom.appendChild(topBar);
    return topBar;
};

const onVerticalEdge = (dom) => {
    let isOnEdge, resizable = false;
    let lastX, lastY = 0;
    dom.addEventListener("mousemove", (e) => {
        if(!isOnEdge && Math.abs(e.clientX - dom.offsetLeft) < 8){
            isOnEdge = true;
            document.body.style.cursor = "e-resize";
        }
        else if(isOnEdge && Math.abs(e.clientX - dom.offsetLeft) > 8 && !resizable){
            isOnEdge = false;
            document.body.style.cursor = "default";
        }
    });
    document.addEventListener("mousemove", (e) => {
        if(isOnEdge && resizable){
            dom.style.left = `${e.clientX}px`;
            dom.style.width = `${parseInt(dom.style.width) - e.clientX + lastX}px`
            console.log(e.clientX - dom.offsetLeft);
            lastX = e.clientX;
        }
    });
    dom.addEventListener("mousedown", (e) => {if(isOnEdge) resizable = true; lastX = e.clientX});
    document.addEventListener("mouseup", (e) => {if(resizable) resizable = false});
    dom.addEventListener("mouseleave", (e) => {
        if(isOnEdge && !resizable){
            document.body.style.cursor = "default";
            isOnEdge = false;
        }
    });
}

const AppWindow = class {
    constructor(width, height) {
        this.dom = addWindowDOM(width, height)
        this.id = Symbol();
        this.topBar = addTopBar(this.dom);
        this.isDragged = false;
        this.#makeDraggable();
        onVerticalEdge(this.dom);
    };
    #makeDraggable() {
        let offsetX, offsetY, isDragging = false;

        this.topBar.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - this.dom.offsetLeft;
            offsetY = e.clientY - this.dom.offsetTop;
        });

        document.addEventListener("mousemove", (e) => {
            if (isDragging) {
                this.dom.style.left = `${e.clientX - offsetX}px`;
                this.dom.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
        });
    }
};


export default AppWindow;
 