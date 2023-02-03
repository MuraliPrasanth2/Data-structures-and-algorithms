function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function moveElementsToEnd(array, element) {
    let swapIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== element) {
            swap(array, swapIndex, i);
            swapIndex++;
        }
    }
}

const array = [0, 2, 3, 0, 4, 5, 0, 7, 8,];
moveElementsToEnd(array, 2);
console.log(array);