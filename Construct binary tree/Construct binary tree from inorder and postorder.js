class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

var buildTree = function (inOrder, postOrder) {

    const inOrderIndex = {}
    inOrder.forEach((item, index) => inOrderIndex[item] = index);

    function buildTreeFromPostOrderArray(postOrderStart, postOrderEnd, inOrderStart, inOrderEnd) {
        if (postOrderStart > postOrderEnd) return null;

        const currentNodeValue = postOrder[postOrderEnd];
        const currentNode = new Node(currentNodeValue);

        const inOrderMid = inOrderIndex[currentNodeValue];
        const numItemsBeforeMid = inOrderMid - inOrderStart;
        const numItemsAfterMid = inOrderEnd - inOrderMid;

        currentNode.left = buildTreeFromPostOrderArray(postOrderStart, postOrderEnd - numItemsAfterMid - 1, inOrderStart, inOrderMid - 1);
        currentNode.right = buildTreeFromPostOrderArray(postOrderStart + numItemsBeforeMid, postOrderEnd - 1, inOrderMid + 1, inOrderEnd);

        return currentNode;
    }

    return buildTreeFromPostOrderArray(0, postOrder.length - 1, 0, inOrder.length - 1);
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));