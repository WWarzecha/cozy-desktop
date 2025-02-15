const visibilityController = (dom) => {
    const makeInvisible = () => dom.style.visibiliy = "hidden";
    const makeVisible = () => dom.style.visibiliy  = "visible";
    return {makeInvisible, makeVisible};
};

export default visibilityController;