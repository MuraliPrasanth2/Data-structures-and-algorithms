const graph = {
    value: 47,
    left: {
        value: 21,
        left: {
            value: 18,
            left: null,
            right: null
        },
        right: {
            value: 27,
            left: null,
            right: null
        }
    },
    right: {
        value: 76,
        left: {
            value: 52,
            left: null,
            right: null
        },
        right: {
            value: 82,
            left: null,
            right: null
        }
    }
};

function DFSPreOrder(node) {
    const result = [];

    function traverse(node) {
        result.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }

    traverse(node);
    return result;
}

function DFSPostOrder(node) {
    const result = [];

    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        result.push(node.value);
    }

    traverse(node);
    return result;
}

function DFSInOrder(node) {
    const result = [];

    function traverse(node) {
        if (node.left) traverse(node.left);
        result.push(node.value);
        if (node.right) traverse(node.right);
    }

    traverse(node);
    return result;
}

console.log(DFSPreOrder(graph));
console.log(DFSPostOrder(graph));
console.log(DFSInOrder(graph));