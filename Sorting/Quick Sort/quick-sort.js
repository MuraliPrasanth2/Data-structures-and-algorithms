function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }
    swap(array, pivotIndex, swapIndex);

    return swapIndex;
}

function quickSort(array, startIndex = 0, endIndex = array.length - 1) {
    if (endIndex - startIndex < 1) return;
    const swapIndex = pivot(array, startIndex, endIndex);
    quickSort(array, startIndex, swapIndex - 1);
    quickSort(array, swapIndex + 1, endIndex);
}



// DO NOT MAKE CHANGES TO TEST FUNCTION
function test() {
    let myArray = [4, 6, 1, 7, 3, 2, 5];
    quickSort(myArray);
    console.log(myArray);
}


test();