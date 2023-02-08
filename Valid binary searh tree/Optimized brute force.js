function isValidBST(node, min = -Infinity, max = Infinity) {
    if (node === null) return true;
    const isNodeValueInValidRange = min < node.value && node.value < max;
    if (!isNodeValueInValidRange) return false;
    return isValidBST(node.left, min, node.value) && isValidBST(node.right, node.value, max);
}