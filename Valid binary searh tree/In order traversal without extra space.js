

function isValidBST(root) {
    let previousNodeValue = null;
    function isValid(node) {
        if (node === null) return true;
        if (!isValid(node.left)) return false;
        if (previousNodeValue !== null && previousNodeValue >= node.val) return false;
        previousNodeValue = node.val;
        if (!isValid(node.right)) return false;
        return true;
    }
    return isValid(root)
}