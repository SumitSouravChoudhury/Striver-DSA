const arr = [3, 1, -9, 8, 7, 22, 5, 0];

// function secondLargest(arr) {
//   if (arr.length < 2) {
//     return null;
//   }

//   let largest = -Infinity,
//     secLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secLargest && arr[i] < largest) {
//       secLargest = arr[i];
//     }
//   }

//   return secLargest;
// }

function secondLargest(arr) {

  let largest = -Infinity, secLargest = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }

    if (arr[i] > secLargest && arr[i] < largest) {
      secLargest = arr[i];
    }
  }

  return secLargest
}

console.log(secondLargest(arr));
