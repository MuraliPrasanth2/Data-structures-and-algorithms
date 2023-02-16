const leftToRightHeights = {};
const rightToLeftHeights = {};
let maxHeight = 0;

function parseLeftToRight(node, level = 0) {
    if (node === null) return;
    leftToRightHeights[node.val] = maxHeight;
    if (level > maxHeight)
        maxHeight = level;
    parseLeftToRight(node.left, level + 1);
    parseLeftToRight(node.right, level + 1);
}

function parseRightToLeft(node, level = 0) {
    if (node === null) return;
    rightToLeftHeights[node.val] = maxHeight;
    if (level > maxHeight)
        maxHeight = level;
    parseRightToLeft(node.right, level + 1);
    parseRightToLeft(node.left, level + 1);
}

var treeQueries = function (root, queries) {
    maxHeight = 0;
    parseLeftToRight(root);
    maxHeight = 0;
    parseRightToLeft(root);
    return queries.map(nodeVal => Math.max(leftToRightHeights[nodeVal], rightToLeftHeights[nodeVal]));
}