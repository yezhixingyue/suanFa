//链表倒置
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

function nizhi(root) {
    if (root.next.next == null) {
        root.next.next = root;
        return root.next
    } else {
        var result = nizhi(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}
var newNode = nizhi(node1)

function bianli (root) {
    console.log(root.value);
    if(root.next != null) {
        bianli(root.next)
    }
}
bianli(node5)
console.log('--------')
bianli(newNode)