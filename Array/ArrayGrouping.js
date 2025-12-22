const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function grouping(arr, g) {

    let res = [], sArr = [];

    for (let i = 0; i < arr.length; i++) {

        sArr.push(arr[i]);
        if ((i + 1) % g === 0) {
            res.push(sArr);
            sArr = [];
        }

    }

    if (sArr.length > 0) {
        res.push(sArr)
    }

    return res;
}

const array = (grouping(arr, 2))

