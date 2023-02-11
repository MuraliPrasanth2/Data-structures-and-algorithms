// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: [[3], [9, 20], [15, 7]]

function levelOrder(root) {
    const result = [];
    let currentLevelValues = [];
    const queue = [root, null];
    let current = null;
    while (queue.length) {
        current = queue.shift();
        if (!current) {
            if (currentLevelValues.length) {
                result.push(currentLevelValues);
                currentLevelValues = [];
                queue.push(null);
            }
        }
        else {
            currentLevelValues.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
    return result;
};


console.log(levelOrder(graph));