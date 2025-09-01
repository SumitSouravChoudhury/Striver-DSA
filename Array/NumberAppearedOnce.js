const arr = [4, 1, 2, 1, 2];

function findAppearedOnce(arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }

  return null;
}

console.log(findAppearedOnce(arr));

// function findAppearedOnceXor(arr) {
//   let xor = 0;

//   for (let i = 0; i < arr.length; i++) {
//     xor = xor ^ arr[i];
//   }

//   return xor;
// }

// console.log(findAppearedOnceXor(arr));
