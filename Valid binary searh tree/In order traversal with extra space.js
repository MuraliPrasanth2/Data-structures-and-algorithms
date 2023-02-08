function isValidBST(root) {
    const valuesInBSTInOrder = getValuesFromBSTInOrder(root);
    return isInAscendingOrder(valuesInBSTInOrder);
}

function getValuesFromBSTInOrder(root, valuesInBST = []) {
    if (root.left) getValuesFromBSTInOrder(root.left, valuesInBST);
    valuesInBST.push(root.value);
    if (root.right) getValuesFromBSTInOrder(root.right, valuesInBST);
    return valuesInBST;
}

function isInAscendingOrder(numbers) {
    for (let i = 1; i < numbers.length; i++)
        if (numbers[i - 1] >= numbers[i])
            return false;
    return true;
}