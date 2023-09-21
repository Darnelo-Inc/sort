import { quickSort } from "./sorts/quickSort"
import { bubbleSort } from "./sorts/bubbleSort"
import { selectionSort } from "./sorts/selectionSort"
import { insertionSort } from "./sorts/insertionSort"
import { mergeSort } from "./sorts/mergeSort"
import { countingSort } from "./sorts/countingSort"

const testArr: number[] = [5, 2, 0, 0, -2, 100, -3]
const expArr: number[] = [-3, -2, 0, 0, 2, 5, 100]

console.log("quickSort", quickSort(testArr))
console.log("bubbleSort", bubbleSort(testArr))
console.log("selectionSort", selectionSort(testArr))
console.log("insertionSort", insertionSort(testArr))
console.log("mergeSort", mergeSort(testArr))
console.log("countingSort", countingSort(testArr))

console.log("Expected", expArr)
