function isValidBST(root) {
    const valuesInTreeInOrder = getValuesInTreeInOrder(root);
    return isInAscendingOrder(valuesInTreeInOrder);
}


function getValuesInTreeInOrder(root) {
    const valuesInTreeInAscendingOrder = new Array();
    let currentNode = root;
    const stack = [];
    while (stack.length !== 0 || currentNode !== null) {
        if (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        else {
            const poppedNode = stack.pop();
            valuesInTreeInAscendingOrder.push(poppedNode.value);
            currentNode = poppedNode.right;
        }
    }
    return valuesInTreeInAscendingOrder;
}

function isInAscendingOrder(numbers) {
    for (let i = 1; i < numbers.length; i++)
        if (numbers[i - 1] >= numbers[i])
            return false;
    return true;
}