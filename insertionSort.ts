function insertionSort(arr: Number[]): Number[] {
  const n = arr.length

  for (let i = 1; i < n; i++) {
    const cur = arr[i]
    let j = i - 1

    while (j > -1 && cur < arr[j]) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = cur
  }

  return arr
}
