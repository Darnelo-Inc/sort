# sort
Sorting functions for typescript are at hand


| Name | Best | Average | Worst | Memory | Stable | Method | Other notes |
| :---:  | :---:  | :---:  | :---:  | :---:  | :---:  | :---:  | :---------:  |
| [QuickSort](https://github.com/Darnelo-Inc/sort/blob/main/quickSort.ts) | $O(n*log(n))$ | $O(n*log(n))$ | $O(n^2)$ | $O(log(n))$ | No | Partitioning | Quicksort is usually done in-place with O(log n) stack space |
| [BubbleSort](https://github.com/Darnelo-Inc/sort/blob/main/bubbleSort.ts) | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Yes | Exchanging | Tiny code size |
| [SelectionSort](https://github.com/Darnelo-Inc/sort/blob/main/selectionSort.ts) | $O(n^2))$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | No | Selection | Stable with $O(n)$ extra space, when using linked lists, or when made as a variant of Insertion Sort instead of swapping the two items |
| [InsertionSort](https://github.com/Darnelo-Inc/sort/blob/main/insertionSort.ts) | $O(n))$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Yes | Insertion | $O(n + d)$, in the worst case over sequences that have d inversions. |
| [MergeSort](https://github.com/Darnelo-Inc/sort/blob/main/mergeSort.ts) | $O(n*log(n))$ | $O(n*log(n))$ | $O(n*log(n))$ | $O(n)$ | Yes | Merging | Highly parallelizable (up to $O(log(n))$ using the Three Hungarians' Algorithm). |


