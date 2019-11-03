//不固定左右度值相差为一的二叉平衡树  二叉查找树
var arr = new Array();
for (var i = 0; i < 100000; i++) {
    var num = Math.round(Math.random() * 100000);
    arr.push(num)
}
// console.log(arr)

var num = 0;

function search(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        num++;
        if (arr[i] == value) return true;
    }
    return false
}

console.log(search(arr, 888), num)

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function balance(root, num) {
    if (root == null) return;
    if (root.value == num) return;
    if (root.value > num) {
        if (root.left == null) root.left = new Node(num);
        else balance(root.left, num)
    } else {
        if (root.right == null) root.right = new Node(num);
        else balance(root.right, num)
    }

}


function toBalanceTree(arr) {
    if (arr == null || arr.length == 0) return false;
    // if (!root) return;
    var node = new Node(arr[0]);
    for (var i = 0; i < arr.length; i++) {
        balance(node, arr[i]);
    }
    return node;
}

var root = toBalanceTree(arr);
var i = 0;

function searchInTree(root, num) {
    if (root == null || num == null) return false;
    i++;
    if (num == root.value) return true;
    if (num < root.value) {
        return searchInTree(root.left, num)
    } else {
        return searchInTree(root.right, num)
    }
}
// console.log(root);

console.log(searchInTree(root, 888), i)

//课堂源码 -- 构建二叉平衡树
// function addNode(root, num) {
//     if (root == null) return;
//     if (root.value == num) return;
//     if (root.value < num) {
//         if (root.right == null) root.right = new Node(num);
//         else addNode(root.right, num)
//     } else {
//         if (root.left == null) root.left = new Node(num);
//         else addNode(root.left, num)
//     }
// }

// function buildSearchTree(arr) {
//     if(arr == null || arr.length == 0) return null;
//     var root = new Node(arr[0]);
//     for (var i = 1; i < arr.length; i ++) {
//         addNode(root,arr[i])
//     }
//     return root;
// }