//find if two strings are anagrams of each other. both strings should be either lowercase or uppercase and no spaces.


const anagram = (str1, str2) => {
  const str1Arr = str1.split('').sort().join('');
  const str2Arr = str2.split('').sort().join('');
  console.log(str1Arr, str2Arr);
  return str1Arr === str2Arr;
}

console.log(anagram('TRAINGLE', 'INTEGRAL'));
console.log(anagram('listen', 'listent'));
