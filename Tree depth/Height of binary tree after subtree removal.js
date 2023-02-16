var treeQueries = function (root, queries) {
    const heights = {};
    let maxHeight = -Infinity
    function updateHeights(node) {
        let currentNodeHeight;

        if (node.left === null && node.right === null)
            currentNodeHeight = 0;
        else if (node.right === null)
            currentNodeHeight = 1 + updateHeights(node.left);
        else if (node.left === null)
            currentNodeHeight = 1 + updateHeights(node.right);
        else
            currentNodeHeight = 1 + Math.max(updateHeights(node.left), updateHeights(node.right));

        if (maxHeight < currentNodeHeight) maxHeight = currentNodeHeight;
        heights[node.val] = currentNodeHeight;
        return currentNodeHeight;
    }
    updateHeights(root);

    const heightsAfterNodeRemoval = {};
    function updateHeightsAfterRemoval(node, level = 0, bestAlternateHeight = -Infinity) {
        if (node.left === null && node.right === null)
            return;

        if (node.left !== null && node.right === null) {
            if (bestAlternateHeight < level)
                bestAlternateHeight = level;
            heightsAfterNodeRemoval[node.left.val] = bestAlternateHeight;
            return updateHeightsAfterRemoval(node.left, level + 1, bestAlternateHeight);
        }

        if (node.left === null && node.right !== null) {
            if (bestAlternateHeight < level)
                bestAlternateHeight = level;
            heightsAfterNodeRemoval[node.right.val] = bestAlternateHeight;
            return updateHeightsAfterRemoval(node.right, level + 1, bestAlternateHeight);
        }

        const rootToLeafHeightOnLeftNodePath = level + heights[node.left.val] + 1;
        const rootToLeafHeightOnRightNodePath = level + heights[node.right.val] + 1;

        if (rootToLeafHeightOnLeftNodePath === rootToLeafHeightOnRightNodePath) return;

        if (rootToLeafHeightOnLeftNodePath > rootToLeafHeightOnRightNodePath) {
            if (bestAlternateHeight < rootToLeafHeightOnRightNodePath)
                bestAlternateHeight = rootToLeafHeightOnRightNodePath
            heightsAfterNodeRemoval[node.left.val] = bestAlternateHeight;
            return updateHeightsAfterRemoval(node.left, level + 1, bestAlternateHeight);
        } else {
            if (bestAlternateHeight < rootToLeafHeightOnLeftNodePath)
                bestAlternateHeight = rootToLeafHeightOnLeftNodePath;
            heightsAfterNodeRemoval[node.right.val] = bestAlternateHeight;
            return updateHeightsAfterRemoval(node.right, level + 1, bestAlternateHeight);
        }

    }
    updateHeightsAfterRemoval(root);
    return queries.map((item) => heightsAfterNodeRemoval[item] !== undefined ? heightsAfterNodeRemoval[item] : maxHeight);
};