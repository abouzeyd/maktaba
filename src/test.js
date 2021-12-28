// function likes(names) {
//   let tab;
//   let number;
//   const [a, b, c] = names;
//   tab = names.map((item) => item);
//   switch (true) {
//     case tab.length > 3:
//       const numero = tab.slice(names.length - 2); il prend les trois dernier chifrre d'un tableau
//       const size = numero.length;
//       number = `${a} ${b}  and ${size} others like this`;
//       break;
//     case tab.length === 0:
//       number = 'no one likes this';
//       break;
//     case tab.length === 1:
//       number = `${a} likes this`;
//       break;
//     case tab.length === 2:
//       number = `${a} ${b} likes this`;
//       break;
//     case tab.length === 3:
//       number = `${a} ${b} ${c} likes this`;
//       break;
//     default:
//       return 'Looking forward to the Weekend';
//   }

//   return number;
// }
// console.log(likes(['Alex', 'franck', 'steven', 'jera']));
// const lengthOfLongestSubstring = (s) => {
//     let iter = s.split('')
//     let newTable = [...new Set(iter)];
//     let size = newTable.length
//     return size;
// };
// console.log(lengthOfLongestSubstring('bbbbb'));
// const findMedianSortedArrays = (nums1, nums2) => {
//   const array1 = (a, b) => {
//     return a - b;
//   };
//   nums1.sort(array1);
//   const array2 = (a, b) => {
//     return a - b;
//   };
//   nums2.sort(array2);
//   const concatener = nums1.concat(nums2);
//   const tri = (a, b) => {
//     return a - b;
//   };
//   const number = concatener.sort(tri);
//   return number.length / 2;
// };
// console.log(findMedianSortedArrays([12, 6, 8, 1, 7], [20, 10, 5, 2, 1]));
// var longestPalindrome = function (s) {
//   let start = s;
//   let palindrome = s.split('').reverse().join('');
//   const result =
//     start === palindrome
//       ? 'ceci est un palindrome'
//       : "cela n'est pas un palindrome";
//   return result;
// };
// console.log(longestPalindrome('awa'));

// var reverse = function (x) {
//   let tab=[]
//   for (let i = 0; i < x.length; i++) {
// tab[x.length-i]=
//   }
//   return x;
// };
// console.log(reverse([123]));
