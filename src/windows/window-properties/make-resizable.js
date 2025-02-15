const makeResizable = (dom, blockingState, eps = 8) => {
    const state = {isXResized: false, isYResized: false, topEdge: false, leftEdge: false, lastX: undefined,
         lastY: undefined, isResized: false};
    let closeVertical, closeHorizontal;
    // change cursor
    document.addEventListener("mousemove", (e) => {
        if(!blockingState.resizeBlock){
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
        if(!blockingState.resizeBlock){
            if(closeVertical){
                state.isXResized = true;
                state.lastX = e.clientX;
            }
            if(closeHorizontal){
                state.isYResized = true;
                state.lastY = e.clientY;
            }
            if(state.isXResized || state.isYResized) blockingState.draggingBlock = true;
        };
    });
    document.addEventListener("mouseup", () => {
        state.isXResized = false;
        state.isYResized = false;
        blockingState.draggingBlock = false;
    });
    document.body.addEventListener("mousemove", (e) => {
        if(!blockingState.resizeBlock){
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
};

export default makeResizable;