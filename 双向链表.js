//双向链表
function Node(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node5.prev = node4;

//双向链表的优点：无论给出哪一个节点，都能对整个链表进行遍历
//缺点：多耗费一个引用的空间，而且构建双向链表比较复杂
//通常不会使用双向链表 因为其能做到的事情单向链表都能做到