
const makeDraggable = (dom, activationElement, blockingState) => {
    const state = {offsetX: 0, offsetY: 0, isDragged: false, draggingBlock: false};

    activationElement.addEventListener("mousedown", (e) => {
        state.isDragged = true;
        state.offsetX = e.clientX - dom.offsetLeft;
        state.offsetY = e.clientY - dom.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (!blockingState.draggingBlock && state.isDragged) {
            dom.style.left = `${e.clientX - state.offsetX}px`;
            dom.style.top = `${e.clientY - state.offsetY}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        state.isDragged = false;
    });
};

export default makeDraggable;