import "./app-window.css"
import makeResizable from "./window-properties/make-resizable.js";
import makeDraggable from "./window-properties/make-draggable.js";
import topBar from "./top-bar/top-bar.js";
import visibilityController from "./visibility-controller/visibility-controller.js";

const addWindowDOM = (width = 200, height = 150) => {
    const dom = document.createElement("div");
    dom.classList.add("app-window");
    dom.style.width = `${width}px`;
    dom.style.height = `${height}px`;
    return dom;
};

const AppWindow = class {
    constructor(icon, appManager, width, height) {
        this.dom = addWindowDOM(width, height)
        this.id = Symbol();
        this.icon = icon;
        this.topBar = topBar(this.icon);
        this.dom.appendChild(this.topBar.dom);
        this.blockingState = {resizeBlock: false, draggingBlock: false};
        makeDraggable(this.dom, this.topBar.dom, this.blockingState);
        makeResizable(this.dom, this.blockingState);
        this.visibilityController = visibilityController(this.dom);
        this.topBar.addMinimizeFunctionality(this.visibilityController.makeInvisible);
        this.topBar.addClosingFunctionality(() => appManager.closeApp(this.id));
    };
    makeVisible = () => this.visibilityController.makeVisible();
    makeInvisible = () => this.visibilityController.makeInvisible();
};


export default AppWindow;