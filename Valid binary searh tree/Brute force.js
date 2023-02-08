function bstMax(root) {
    if (root === null) return undefined;
    while (root.right !== null)
        root = root.right;
    return root.val;
}

function bstMin(root) {
    if (root === null) return undefined;
    while (root.left !== null)
        root = root.left;
    return root.val;
}

function isValidBST(root) {
    if (root === null) return true;

    const leftMax = bstMax(root.left);
    const rightMin = bstMin(root.right);
    const rootValueIsInValidRange = (leftMax === undefined || leftMax < root.val) && (rightMin === undefined || root.val < rightMin);
    if (!rootValueIsInValidRange) return false;

    return isValidBST(root.left) && isValidBST(root.right);
}