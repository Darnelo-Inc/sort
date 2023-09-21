export function countingSort(arr: number[]): number[] {
  let maxElem = arr[0]

  for (let i = 1; i < arr.length; i++) {
    maxElem = Math.max(maxElem, arr[i])
  }

  const tempArr = Array(maxElem + 1).fill(0)

  for (const elem of arr) {
    tempArr[elem]++
  }

  let b = 0
  for (let i = 0; i < maxElem + 1; i++) {
    for (let j = 0; j < tempArr[i]; j++) {
      arr[b] = i
      b++
    }
  }

  return arr
}
