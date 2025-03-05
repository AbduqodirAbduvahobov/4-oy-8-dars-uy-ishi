function daraja2(n) {
    let arr = [];
    let qiymat = 2;
    for (let i = 0; i < n; i++) {
        arr.push(qiymat);
        qiymat *= 2;
    }
    return arr;
}


function createArr(n, A, B) {
    let arr = [A, B];
    for (let i = 2; i < n; i++) {
        let total = 0;
        for (let j = 0; j < i; j++) {
            total += arr[j];
        }
        arr.push(total);
    }
    return arr;
}


function ReverseArr(arr) {
    let yangiMassiv = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        yangiMassiv.push(arr[i]);
    }
    return yangiMassiv;
}


function Odds(arr) {
    let toqlar = [];
    let soni = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            toqlar.push(arr[i]);
            soni++;
        }
    }
    console.log(toqlar.join(' '));
    console.log(`Toqlar soni = ${soni}`);
}


function EvenOdd(arr) {
    let juftlar = [];
    let toqlar = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            juftlar.push(arr[i]);
        } else {
            toqlar.unshift(arr[i]);
        }
    }
    console.log([...juftlar, ...toqlar].join(' '));
}


function evenindex(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    return res;
}


function ReverseOddIndex(arr) {
    let res = [];
    for (let i = arr.length - 1; i > 0; i -= 2) {
        res.push(arr[i]);
    }
    return res;
}


function OddEven(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    for (let i = 1; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    return res;
}


function OddEvenminus(arr) {
    let res = [];
    for (let i = 1; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    for (let i = arr.length - 2; i >= 0; i -= 2) {
        res.push(arr[i]);
    }
    return res;
}


function arrchange(arr) {
    let res = [];
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        res.push(arr[left++]);
        if (left <= right) res.push(arr[right--]);
    }
    return res;
}


function total(arr, K, L) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < K || i > L) {
            total += arr[i];
        }
    }
    return total;
}


function TrueFalse(arr) {
    let rights = [];
    let lie = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            rights.push(arr[i]);
        } else {
            lie.push(arr[i]);
        }
    }
    return { rights, lie };
}


function Evenindexmin(arr) {
    let min = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}


function OddindexMax(arr) {
    let max = arr[1];
    for (let i = 3; i < arr.length; i += 2) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
