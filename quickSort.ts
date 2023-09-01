export default function quickSort(arr: Number[]): Number[] {
  if (arr.length < 2) return arr

  const left: Number[] = []
  const right: Number[] = []
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
