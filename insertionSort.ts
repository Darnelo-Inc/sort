export function insertionSort(arr: Number[]): Number[] {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i]
    let sorted = i - 1

    while (sorted > -1 && cur < arr[sorted]) {
      arr[sorted + 1] = arr[sorted]
      sorted--
    }

    arr[sorted + 1] = cur
  }

  return arr
}
