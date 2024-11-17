let arr = [421, 1, 24, 56, 343, 12, 15, 98]
let n = arr.length

function getMax(arr, n) {
    let mx = arr[0]
    for (i = 1; i < n; i++) {
        if (arr[i] > mx) {
            mx = arr[i]
        }
    }
    return mx
}

function countSort(arr, n, exp) {
    let output = new Array(n)
    let count = new Array(10).fill(0)
    for (i = 0; i < n; i++) {
        count[Math.floor(arr[i] / exp) % 10]++
    }
    for (i = 1; i < 10; i++) {
        count[i] += count[i - 1]
    }
    for (i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i]
        count[Math.floor(arr[i] / exp) % 10]--
    }
    for (i = 0; i < n; i++) {
        arr[i] = output[i]
    }
}

function radixsort(arr, n) {

    let m = getMax(arr, n)
    for (exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
        countSort(arr, n, exp)
    }
}

radixsort(arr, n)
console.log("" + arr)
