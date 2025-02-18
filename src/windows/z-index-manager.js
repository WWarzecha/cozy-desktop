

const zIndexManager = (() => {
    let zIndex = 10;
    const getZIndex = () => ++zIndex;
    return {getZIndex}
})();

export default zIndexManager;