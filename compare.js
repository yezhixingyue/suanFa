//二叉树的比较
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null
}
var a1 = new Node('a');
var b1 = new Node('b');
var c1 = new Node('c');
var d1 = new Node('d');
var e1 = new Node('e');
var f1 = new Node('f');
var g1 = new Node('g');

a1.left = c1;
a1.right = b1;
c1.left = g1;
c1.right = f1;
b1.left = e1;
b1.right = d1;

var a2 = new Node('a');
var b2 = new Node('b');
var c2 = new Node('c');
var d2 = new Node('d');
var e2 = new Node('e');
var f2 = new Node('f');
var g2 = new Node('g');

a2.left = b2;
a2.right = c2;
c2.left = g2;
c2.right = f2;
b2.left = e2;
b2.right = d2;

function compare(root1, root2) {
    if (root1 === root2) return true;
    if(root1 == null && root2 != null || root2 == null && root1 != null) return false;
    if (root1.value != root2.value) return false;
    return  compare(root1.left, root2.left) && compare(root1.right, root2.right) 
    || compare(root1.left, root2.right) && compare(root1.right, root2.left)
}

console.log(compare(a1, a2))