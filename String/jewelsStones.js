const jewels = "aA";
const stones = "aAAbbabbAa";

function jewelsStones(jewels, stones) {
  let mySet = new Set();
  let count = 0;

  for (let i = 0; i < jewels.length; i++) {
    mySet.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (mySet.has(stones[i])) {
      count++;
    }
  }

  return count;
}

console.log(jewelsStones(jewels, stones));
