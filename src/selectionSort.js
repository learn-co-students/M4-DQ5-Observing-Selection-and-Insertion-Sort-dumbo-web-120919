function selectionSort(arr) {
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  // for every item in the arr
  // find the smallest and swap it with the current item
  
  /* HELPER FUNCTION: swap two items */
  function swap(arr, i, j) {
    let tempItem = arr[i]
    arr[i] = arr[j]
    arr[j] = tempItem
  }

  // loop thru the arr
  for (let i = 0; i < arr.length; i++) {
    // create a variable (minIdx) to store the index that has the smallest number
    let minIdx = i
    // Now we are entering an inner-loop.
    // Iterate over the arr starting from the index FOLLOWING the index that stores the smallest number
    for (let j = i + 1; j < arr.length; j++) {
      // if current item is smaller than the smallest number...
      if (arr[j] < arr[minIdx]) {
        // ...reassign the index with smallest number as the current item's index
        minIdx = j
      }
    }
    // Now we are back to the outer-loop.
    
    // Before the next iteration, check if minIdx remains the same
    // if minIdx is already reassgined to j (not i)...
    // ...we need to swap the items via HELPER FUNCTION
    if (minIdx !== i) {
      swap(arr, i, minIdx)
    }
    // on to the next iteration
  }
  // finally, return the arr with the correct order
  return arr
}
