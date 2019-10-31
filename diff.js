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

a2.left = c2;
a2.right = b2;
c2.left = g2;
c2.right = f2;
b2.left = e2;
e2.right = d2;

function diff(root1,root2,diffList) {
    if (root1 == root2) return true;
    if (root1 == null && root2 != null) {
        diffList.push({type : '新增', origin : null, now : root2});
    } else if(root1 != null && root2 == null) {
        diffList.push({type : '删除', origin : root1, now : null})
    } else if(root1.value != root2.value){
        diffList.push({type : '修改', origin : root1, now : root2})
        diff(root1.left,root2.left,diffList) 
        diff(root1.right,root2.right,diffList)
    } else {
        diff(root1.left,root2.left,diffList) 
        diff(root1.right,root2.right,diffList)
    }
    return diffList

}
var diffList = [];
console.log(diff(a1,a2,diffList))