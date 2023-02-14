class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// recursive less optimized.
var buildTree = function (preorder, inorder, preorderStart = 0, preorderEnd = preorder.length - 1, inorderStart = 0, inorderEnd = inorder.length - 1) {
    if (preorderStart > preorderEnd) return null;

    const currentNodeValue = preorder[preorderStart];
    const currentNode = new Node(currentNodeValue);

    const inorderMid = inorder.indexOf(currentNodeValue);
    const numItemsBeforeMid = inorderMid - inorderStart;

    currentNode.left = buildTree(preorder, inorder, preorderStart + 1, preorderStart + numItemsBeforeMid, inorderStart, inorderMid - 1);
    currentNode.right = buildTree(preorder, inorder, preorderStart + numItemsBeforeMid + 1, preorderEnd, inorderMid + 1, inorderEnd);

    return currentNode;
}


console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
// console.log(buildTree([-1], [-1]));
// console.log(buildTree([1, 2, 3], [3, 2, 1]));
