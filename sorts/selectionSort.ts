export function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let min_ind = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_ind]) min_ind = j
    }

    if (i !== min_ind) {
      const tmp = arr[i]
      arr[i] = arr[min_ind]
      arr[min_ind] = tmp
    }
  }

  return arr
}
