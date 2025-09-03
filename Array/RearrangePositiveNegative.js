const arr = [1, 2, -4, -6, -5, 3, 4];

function rearrangePosNeg(arr) {
  let n = arr.length,
    posIdx = 0,
    negIdx = 1,
    i = 0;
  let res = [];

  while (posIdx < n && negIdx < n && i < n) {
    if (arr[i] >= 0) {
      res[posIdx] = arr[i];
      posIdx += 2;
    } else {
      res[negIdx] = arr[i];
      negIdx += 2;
    }
    i++;
  }

  while (posIdx < n && i < n) {
    res[posIdx] = arr[i];
    posIdx += 2;
    i++;
  }
  while (negIdx < n && i < n) {
    res[negIdx] = arr[i];
    negIdx += 2;
    i++;
  }

  return res;
}

console.log(rearrangePosNeg(arr));
