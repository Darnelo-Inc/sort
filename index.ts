const testArr: Number[] = [5, 2, 0, 0, -2, 100, -3]
const expArr: Number[] = [-3, -2, 0, 0, 2, 5, 100]

console.log("quickSort", quickSort(testArr))
console.log("bubbleSort", bubbleSort(testArr))
console.log("selectionSort", selectionSort(testArr))
console.log("insertionSort", insertionSort(testArr))

console.log("Expected", expArr)
