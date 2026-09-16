const s = "egg";
const t = "add";

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapST.has(s[i]) && mapST.get(s[i]) !== t[i]) {
      return false;
    }
    if (mapTS.has(t[i]) && mapTS.get(t[i]) !== s[i]) {
      return false;
    }

    mapST.set(s[i], t[i]);
    mapTS.set(t[i], s[i]);
  }

  return true;
};

console.log(isIsomorphic(s, t));
