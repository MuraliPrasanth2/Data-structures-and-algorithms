function isValidBST(root) {
    let prev = null;
    function isValid(root) {
        let currentNode = root;
        const stack = [];
        while (stack.length || currentNode) {
            if (currentNode) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            }
            else {
                const poppedNode = stack.pop();
                if (prev && poppedNode.value <= prev.value)
                    return false;
                prev = poppedNode;
                currentNode = poppedNode.right;
            }
        }
        return true;
    }

    return isValid(root);
}