//深度搜索  和广度搜索
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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

//深度搜索 和前序遍历方法的搜索顺序相一致  易于搜索未知的事物  因为其可能会跳几下后就跳出当前范围 如网页链接多深度几下就转到外站链接了
function deepSearch(root, key) {
    if (root == null) return false;
    console.log(root.value)
    if (root.value == key) return true;
    if (deepSearch(root.left, key) || deepSearch(root.right, key)) return true;
    else return false
}
// console.log(deepSearch(a1, 'm')) //搜索顺序为：a c g f b e d  -- 和前序遍历一致

//广度搜索  横向搜索  易于搜索已知的事物
function breadthSearch(rootList, key) {
    if (rootList == null || rootList.length == 0) return false;
    var childList = [];
    for (var i = 0; i < rootList.length; i++) {
        if (rootList[i] != null && rootList[i].value == key) {
            return true
        } else {
            rootList[i].left && childList.push(rootList[i].left);
            rootList[i].right && childList.push(rootList[i].right);
        }
    }
    return breadthSearch(childList, key)
}
console.log(breadthSearch([a1], 'm'))

