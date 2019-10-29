//冒泡排序
var arr = [4, 1, 9, 6, 3, 2, 8, 7];

function compare(a, b) {
    if (a > b) return true;
    else return false
}

function exchange(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function bubbleSort(arr) {
    if (arr == null || arr.length == 0) return;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1)
            }
        }
    }
}
// bubbleSort(arr)
// console.log(arr)

//选择排序
function selectSort(arr) {
    if (arr == null || arr.length == 0) return;
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = 0;
        for (let j = 1; j < arr.length - i; j++) {
            if (compare(arr[j], arr[maxIndex])) {
                maxIndex = j
            }
        }
        exchange(arr, maxIndex, arr.length - 1 - i)

    }
}
// selectSort(arr)
// console.log(arr)

//快速排序方法
function quickSort(arr) {
    if (arr == null || arr.length == 0) return [];
    let leader = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (leader > arr[i]) left.push(arr[i]);
        else right.push(arr[i]);
    }
    left = quickSort(left);
    right = quickSort(right);
    left.push(leader)
    return left.concat(right)

}
// quickSort(arr)
// console.log(quickSort(arr))

//标准排序方法
var arr = [4, 1, 9, 6, 3, 2, 8, 7];
function standardsort(arr, begin, end) {
    if (begin >= end - 1) return;
    var left = begin;
    var right = end;
    // console.log(left,'-1-',indexPoint,'-1-',right)
    do {
        
        do left++; while (left < right && arr[left] < arr[begin]);
        do right--; while(right > left && arr[right] > arr[begin]);
        // console.log(left,'-s-',indexPoint,'-s-',right)
        if (left < right)  exchange(arr,left,right);
    } while (left < right)
    var indexPoint = left == right ? right -1 : right;
    // console.log(left,'-l-',indexPoint,'-l-',right)
    exchange(arr,begin,indexPoint);
    standardsort(arr,begin,indexPoint);
    standardsort(arr,indexPoint + 1,end)
}

function sort(arr) {
    standardsort(arr, 0, arr.length)
}
sort(arr)
console.log(arr)