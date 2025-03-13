// 1-mashq tayyor

// const ar = (arr) => {
//     let max = arr[0];
//     let min = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }

//     return max - min;
// };

// console.log(ar([10, 5, 20, 8]));

// 2-mashq tayyor

// function aray(arr) {
//     let NewAray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         NewAray.push(arr[i]);
//     }
//     return NewAray;
// }

// console.log(aray([1, 2, 3, 4, 5]));

// 3-mashq
// function funksiyaElement(arr) {
//     let str = {};
//     let toplam = 0;
//     let funksiyaElement;

//     for (let num of arr) {
//         str[num] = (str[num] || 0) + 1;
//         if (str[num] > toplam) {
//             toplam = str[num];
//             funksiyaElement= num;
//         }
//     }
//     return funksiyaElement;
// }

// console.log(funksiyaElement([2, 3, 2, 4, 3, 2, 5]));

// 4-mashq
// function sort(arr) {
//     let sortirovka = arr.filter(num => num > 0).sort((a, b) => a - b);
//     let i = 0;

//     return arr.map(num => (num > 0 ? sortirovka[i++] : num));
// }

// console.log(sort([4, -1, 3, -2, 2, 1]));

// 6-mashq
// function funksiya(arr1, arr2) {
//     let result = [];

//     for (let num of arr1) {
//         if (!arr2.includes(num)) {
//             result.push(num);
//         }
//     }

//     for (let num of arr2) {
//         if (!arr1.includes(num)) {
//             result.push(num);
//         }
//     }

//     return result;
// }

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// console.log(funksiya(arr1, arr2));

// 7-masala
// function taqqoslashfunksiyasi(arr) {
//     return arr.filter(num => num !== 0).reduce((a, b) => a * b, 1);
// }

// console.log(taqqoslashfunksiyasi([2, 3, 4, 0, 5,5]));
// 8-masala

// function nnitopish(arr,n) {
//     return[...arr].sort((a,b)=>b-a)[n-1]

// }
// console.log( nnitopish([10,20,30,40,50],2));
// 9-mashq

// let sonlar = [1,2,3,4,5,6]
// let juft = sonlar.filter(num=>num%2 === 0);
// let toq = sonlar.filter(num=>num%2 === 1);
// console.log(juft,toq);

// 9-masq/1

// function getLevel2(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(2 ** i);
//     }
//     return result;
// }

// console.log(getLevel2(5));
// 9-mashq/2
// function masala(n, A, B) {
//     let arr = [A, B];
//     for (let i = 2; i < n; i++) {
//         arr.push(arr.reduce((sum, num) => sum + num, 0));
//     }
//     return arr;
// }

// console.log(masala(5, 2, 3));
//  9-mashq/3
// function teskarimachonchiqarish(arr) {
//     return arr.reverse();
// }

// console.log(teskarimachonchiqarish([1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15]));

// // 9-mashq/4
// function toqlarsoni(arr) {
//     let odds = arr.filter(num => num % 2 !== 0);
//     let result = odds;
//     console.log(result,"toqlar soni =",+odds.length);
// }

// toqlarsoni([4, 5, 7, 8, 6, 9]);
// 9-mashq/5
// function sortEvenOdd(arr) {
//     let evens = arr.filter(x => x % 2 === 0);
//     let odds = arr.filter(x => x % 2 !== 0).reverse();
//     return [...evens, ...odds];
// }

// console.log(sortEvenOdd([4, 5, 7, 8, 6, 9]));
// 9-mashq/6
// function indeksiorqali(arr) {
//     console.log(arr.filter((_, i) => i % 2 === 0).join(" "));
// }

// indeksiorqali([1, 2, 3, 4, 5, 6]);
// 9-mashq/7
// function reverseOddIndex(arr) {
//     console.log(arr.filter((_, i) => i % 2 !== 0).reverse().join(" "));
// }

// reverseOddIndex([1, 2, 3, 4, 5, 6]);
// 9-mashq/8
// function evenThenOddIndex(arr) {
//     let even = arr.filter((_, i) => i % 2 === 0);
//     let odd = arr.filter((_, i) => i % 2 !== 0);
//     console.log([...even, ...odd].join(" "));
// }

// evenThenOddIndex([1, 2, 3, 4, 5, 6]);

// 9-mashq/9
// function oddUpEvenDown(arr) {
//     let odd = arr.filter((_, i) => i % 2 !== 0);
//     let even = arr.filter((_, i) => i % 2 === 0).reverse();
//     console.log([...odd, ...even].join(" "));
// }

// oddUpEvenDown([1, 2, 3, 4, 5, 6]);
// 9-mashq/10
// function customOrder(arr) {
//     let result = [];
//     let left = 0, right = arr.length - 1;
//     while (left <= right) {
//         if (left < right) result.push(arr[left++], arr[left++], arr[right--], arr[right--]);
//         else result.push(arr[left++]);
//     }
//     console.log(result.join(" "));
// }

// customOrder([1, 2, 3, 4, 5, 6]);

// // 9-mashq/11
// function rangeOutSum(arr, K, L) {
//     return arr.reduce((sum, num, i) => (i < K || i > L ? sum + num : sum), 0);
// }

// console.log(rangeOutSum([1, 2, 3, 4, 5, 6], 2, 4));

// // 9-mashq/12
// function separateTruthyFalsy(arr) {
//     let truthy = arr.filter(Boolean);
//     let falsy = arr.filter(x => !x);
//     console.log("Truthy:", truthy);
//     console.log("Falsy:", falsy);
// }

// separateTruthyFalsy([10, false, "", "Abdulaziz", null]);
// // 9-mashq/13
// function getOddMin(arr) {
//     return Math.min(...arr.filter((_, i) => i % 2 === 0));
// }

// console.log(getOddMin([3, 8, 1, 5, 2, 9]));
// 9-mashq/14
// function getEvenMax(arr) {
//     return Math.max(...arr.filter((_, i) => i % 2 !== 0));
// }

// console.log(getEvenMax([3, 8, 1, 5, 2, 9]));
// // 9-mashq/15 chaq qigan chunmadim
// function lastLocalMax(arr) {
//     let index = -1;
//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//             index = i;
//         }
//     }
//     return index;
// }

// console.log(lastLocalMax([1, 3, 7, 5, 10, 2, 8]));
// 9-mashq/16 chatniki
// function closestToR(arr, R) {
//     return arr.reduce((closest, num) =>
//         Math.abs(num - R) < Math.abs(closest - R) ? num : closest
//     );
// }

// console.log(closestToR([1, 5, 9, 15, 20], 10)); // 9
// 9-mashq/17
// function maxAdjacentSum(arr) {
//     return arr.slice(0, -1).reduce((max, _, i) =>
//         Math.max(max, arr[i] + arr[i + 1]), -Infinity
//     );
// }

// console.log(maxAdjacentSum([3, 7, 1, 8, 9]));
