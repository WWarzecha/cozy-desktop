const visibilityController = (dom) => {
    let displayValue;
    const makeInvisible = () => {
        displayValue = dom.style.display;
        dom.style.display = "none";
    };
    const makeVisible = () => {dom.style.display = displayValue;};
    return {makeInvisible, makeVisible};
};

export default visibilityController;