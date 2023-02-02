function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        const valueToInsert = array[i];
        let j = i - 1;
        while (array[j] > valueToInsert && j >= 0) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = valueToInsert;
    }
}


const testArray = [4, 2, 6, 5, 1, 3];
insertionSort(testArray);
console.log(testArray);