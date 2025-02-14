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


const AppWindow = class {
    constructor(width, height) {
        this.dom = addWindowDOM(width, height)
        this.id = Symbol();
        this.topBar = addTopBar(this.dom);
        this.isDragged = false;
        this.#makeDraggable();
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
 