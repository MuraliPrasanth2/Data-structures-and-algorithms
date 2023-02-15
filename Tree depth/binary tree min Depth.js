function minDepth(root) {
    if (root === null) return 0;
    let currentLevelNodes = [root];
    let nextLevelNodes;
    let levelCounter = 0;
    while (currentLevelNodes.length !== 0) {
        levelCounter++;
        nextLevelNodes = []
        for (const node of currentLevelNodes) {
            if (node.left === null && node.right === null)
                return levelCounter;
            if (node.left !== null)
                nextLevelNodes.push(node.left);
            if (node.right !== null)
                nextLevelNodes.push(node.right);
        }
        currentLevelNodes = nextLevelNodes;
    }
    return levelCounter;
}