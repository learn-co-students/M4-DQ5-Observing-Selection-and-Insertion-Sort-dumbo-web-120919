function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  
  // for every item in the collection
  // check if the previous item is greater than the current item
  // if greater, the current item is not in place: swap it with the previous item
  // repeat this process until the item is in the proper place
  // only then move on to the next item in the collection

  /* Outer loop (starting at index 1 because index 0 has no previous item to compare) */
  for (let i = 1; i < arr.length; i++) {
      // create a variable to hold the current item
      let itemHolder = arr[i]
      // assign another variable as the index previous to the current one
      let j = i - 1
      
      /* Inner loop */
      // As long as the previous item is greater than current item AND previous index is not negative...
      while (arr[j] > itemHolder && j >= 0) {
        //...swap them (arr[j + 1] === arr[i])
        arr[j + 1] = arr[j]
        // keep checking backwards
        j--
      }
      // Now all of the previous items are properly sorted.
      // assign the next item in inner loop as the current item in outer loop 
      arr[j + 1] = itemHolder
  }
  return arr
}
