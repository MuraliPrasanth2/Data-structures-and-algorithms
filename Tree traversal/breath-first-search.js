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
}

// Breath first search
function BFS(node) {
    const queue = [node];
    const result = [];

    while (queue.length !== 0) {
        const currentNode = queue.shift();

        if (currentNode.left)
            queue.push(currentNode.left);
        if (currentNode.right)
            queue.push(currentNode.right);

        result.push(currentNode.value);
    }

    return result;
}


console.log(BFS(graph));