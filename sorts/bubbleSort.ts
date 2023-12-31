export function bubbleSort(arr: number[]): number[] {
  if (arr.length < 2) return arr

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }

  return arr
}
