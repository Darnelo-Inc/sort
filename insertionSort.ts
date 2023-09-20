export function insertionSort(arr: Number[]): Number[] {
  for (let i = 1; i < arr.length; i++) {
    let sorted = i - 1
    const current = arr[i]

    while (sorted > -1 && current < arr[sorted]) {
      arr[sorted + 1] = arr[sorted]
      sorted--
    }

    arr[sorted + 1] = current
  }

  return arr
}
