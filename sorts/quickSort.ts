export function quickSort(arr: number[]): number[] {
  if (arr.length < 2) return arr

  const left: number[] = []
  const right: number[] = []
  const pivot = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}
