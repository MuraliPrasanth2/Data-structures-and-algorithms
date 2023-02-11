// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: [[3], [20, 9], [15, 7]]


function zigzagLevelOrder(root) {
    const result = [];
    let currentLevelValues = [];
    let flipped = false;
    const queue = [root, null];
    let current = null;
    while (queue.length) {
        current = queue.shift();
        if (!current) {
            if (!currentLevelValues.length) break;
            result.push(currentLevelValues);
            currentLevelValues = [];
            queue.push(null);
            flipped = !flipped
        }
        else {
            if (flipped) currentLevelValues.unshift(current.val);
            else currentLevelValues.push(current.val);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
    return result;
};

function zigzagLevelOrderRecursive(root) {
    const result = [];
    function addValuesInZigzagOrder(node, level = 0) {
        if (node === null) return;
        result[level] = result[level] ? result[level] : [];
        if (level % 2 === 0) result[level].push(node.val);
        else result[level].unshift(node.val);
        addValuesInZigzagOrder(node.left, level + 1)
        addValuesInZigzagOrder(node.right, level + 1);
    }
    addValuesInZigzagOrder(root, 0);
    return result;
};