//数组的遍历
var arr = [1, 2, 3, 4, 5, 6, 7, 8]

//1.正常方式遍历
function bianArr(arr) {
    if (arr == null) return; //严谨行判断
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
// bianArr(arr)

//递归方式遍历
function bianArr2(arr, i) {
    if (arr == null || i >= arr.length) return;

    console.log(arr[i]);
    bianArr2(arr, i + 1)

}
bianArr2(arr, 0)


//链表的遍历
//1.创建一个链表
function Node(value) {
    this.value = value;

    this.next = null
}
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;
//2.遍历 (while循环方式进行遍历)
function bianLink(root) {
    var temp = root;
    while (true) { //使用while循环的方式进行遍历
        if (temp != null) {
            console.log(temp.value);
        } else {
            break
        }
        temp = temp.next;
    }
}
// bianLink(node1)

//递归方式进行链表的遍历
function bianLink2(root) {

    if (root == null) return;
    console.log(root.value)
    bianLink2(root.next)

}

bianLink2(node1)