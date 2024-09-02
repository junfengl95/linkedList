const nodeFactory = () => {
    const createNode = (value = null, nextNode = null) => {
        return {
            value,
            nextNode
        };
    };
    return { createNode };
};

export default nodeFactory;