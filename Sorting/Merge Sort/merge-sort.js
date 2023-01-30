function mergeAsSorted(array1, array2) {
    const combinedArrayLength = array1.length + array2.length
    const combined = new Array(combinedArrayLength);

    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined[i + j] = array1[i];
            i++
        }
        else {
            combined[i + j] = array2[j];
            j++;
        }
    }
    while (i < array1.length) {
        combined[i + j] = array1[i];
        i++;
    }
    while (j < array2.length) {
        combined[i + j] = array2[j];
        j++;
    }

    return combined;
}

function mergeSort(array) {
    if (array.length === 1) return array;
    const halfway = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array.slice(0, halfway));
    const secondHalf = mergeSort(array.slice(halfway, array.length));
    return mergeAsSorted(firstHalf, secondHalf);
}

console.log(mergeSort([3, 2, 5, 1, 6, 7, 1, 3, 4, 5, 9, 11, 10,]))