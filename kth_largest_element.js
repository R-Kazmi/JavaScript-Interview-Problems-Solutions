


// find the kth largest element in an array.

const kthLargest = (arr, k) => {
    const sorted = arr.sort((a, b) => b - a);
    return sorted[k - 1];
}

console.log(kthLargest([10, 2, 3, 4, 5, 6, 7], 4));