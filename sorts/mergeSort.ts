export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(firstArr: number[], secondArr: number[]) {
  const arrSort: number[] = []
  let i = 0,
    j = 0

  while (i < firstArr.length && j < secondArr.length) {
    arrSort.push(firstArr[i] < secondArr[j] ? firstArr[i++] : secondArr[j++])
  }

  return [...arrSort, ...firstArr.slice(i), ...secondArr.slice(j)]
}
