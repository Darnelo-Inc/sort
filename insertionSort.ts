export function insertionSort(arr: Number[]): Number[] {
  for (let i = 1; i < arr.length; i++) {
    let sorted = i - 1

    while (sorted > -1 && arr[sorted] > arr[sorted + 1]) {
      const tmp = arr[sorted]
      arr[sorted] = arr[sorted + 1]
      arr[sorted + 1] = tmp

      sorted--
    }
  }

  return arr
}
