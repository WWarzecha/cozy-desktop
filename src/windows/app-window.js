import "./app-window.css"


const addWindowDOM = (width = 200, height = 150) => {
    const dom = document.createElement("div");
    dom.classList.add("app-window");
    dom.style.width = `${width}px`;
    dom.style.height = `${height}px`;
    return dom;
};

const addTopBar = (dom, icon) => {
    const topBar = document.createElement("div");
    topBar.classList.add("app-window-top-bar");
    const appIcon = document.createElement("img");
    appIcon.src = icon;
    topBar.appendChild(appIcon);

    const xIcon = document.createElement("img");
    xIcon.classList.add("x-btn");
    setTimeout(() => xIcon.src = require("../img/x.svg"), 0);
    topBar.appendChild(xIcon);

    dom.appendChild(topBar);
    return topBar;
};

const makeDraggable = (dom, activationElement) => {
    const state = {offsetX: 0, offsetY: 0, isDragged: false, draggingBlock: false};

    activationElement.addEventListener("mousedown", (e) => {
        state.isDragged = true;
        state.offsetX = e.clientX - dom.offsetLeft;
        state.offsetY = e.clientY - dom.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (!state.draggingBlock && state.isDragged) {
            dom.style.left = `${e.clientX - state.offsetX}px`;
            dom.style.top = `${e.clientY - state.offsetY}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        state.isDragged = false;
    });

    const block = () => state.draggingBlock = true;
    const unblock = () => state.draggingBlock = false;
    return {block, unblock};
};

const makeResizable = (dom, eps = 8) => {
    const state = {isXResized: false, isYResized: false, topEdge: false, leftEdge: false, lastX: undefined,
         lastY: undefined, isResized: false, resizeBlock: false, dragging_controller: undefined};
    let closeVertical, closeHorizontal;
    // change cursor
    document.addEventListener("mousemove", (e) => {
        if(!state.resizeBlock){
            if(Math.abs(e.clientX - dom.offsetLeft) < eps){
                closeVertical = true;
                state.leftEdge = true;
            }
            else if(Math.abs(e.clientX - dom.offsetLeft - parseInt(dom.style.width)) < eps){
                closeVertical = true;
                state.leftEdge = false;
            }
            else{
                closeVertical = false;
            }
            if(Math.abs(e.clientY - dom.offsetTop) < 8){
                closeHorizontal = true;
                state.topEdge = true;
            }
            else if(Math.abs(e.clientY - dom.offsetTop - parseInt(dom.style.height)) < 8){
                closeHorizontal = true;
                state.topEdge = false;
            }
            else{
                closeHorizontal = false;
            }
            dom.style.cursor = closeVertical && closeHorizontal && (!state.topEdge && state.leftEdge || state.topEdge && !state.leftEdge) ? "nesw-resize" :
             closeVertical && closeHorizontal ? "nwse-resize" :
             closeVertical ? "ew-resize" :
             closeHorizontal ? "ns-resize" :
             "default";
        }
    });
    dom.addEventListener("mousedown", (e) => {
        if(closeVertical){
            state.isXResized = true;
            state.lastX = e.clientX;
        }
        if(closeHorizontal){
            state.isYResized = true;
            state.lastY = e.clientY;
        }
        if(state.isXResized || state.isYResized) state.dragging_controller.block();
    });
    document.addEventListener("mouseup", () => {
        state.isXResized = false;
        state.isYResized = false;
        state.dragging_controller.unblock();
    });
    document.body.addEventListener("mousemove", (e) => {
        if(!state.resizeBlock){
            if(state.isXResized){
                let x_change = e.clientX - state.lastX;
                let width = parseInt(dom.style.width);
                if(state.leftEdge){
                    dom.style.left = `${e.clientX}px`;
                    dom.style.width = `${width - x_change}px`
                }
                else{
                    dom.style.width = `${width + x_change}px`
                }
                state.lastX = e.clientX;
            }
            if(state.isYResized){
                let y_change = e.clientY - state.lastY;
                let height = parseInt(dom.style.height);
                if(state.topEdge){
                    dom.style.top = `${e.clientY}px`;
                    dom.style.height = `${height - y_change}px`
                }
                else{
                    dom.style.height = `${height + y_change}px`
                }
                state.lastY = e.clientY;
            }
        }
    });
    const block = () => state.resizeBlock = true;
    const unblock = () => state.resizeBlock = false;
    const add_dragging_controller = (controller) => state.dragging_controller = controller;
    return {block, unblock, add_dragging_controller};
}

const AppWindow = class {
    constructor(width, height, icon_url = undefined) {
        this.dom = addWindowDOM(width, height)
        this.id = Symbol();
        this.icon = require("../img/anchor.svg");
        // this.dom.style.backgroundImage = `url(${this.icon})`;
        this.topBar = addTopBar(this.dom, this.icon);
        this.dragging_controller = makeDraggable(this.dom, this.topBar);
        this.resize_controller = makeResizable(this.dom);
        this.resize_controller.add_dragging_controller(this.dragging_controller);
        
    };
};


export default AppWindow;
 