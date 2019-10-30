//前序遍历顺序为：ACGFBED   中序遍历：GCFAEBD   后序遍历：GFCEDBA
var qian = ['a', 'c', 'g', 'f', 'b', 'e', 'd'];
var zhong = ['g', 'c', 'f', 'a', 'e', 'b', 'd'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function reduction1(qian, zhong) {
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length) return null;
    var root = new Node(qian[0]);
    var index = zhong.indexOf(root.value)
    var zhongLeft = zhong.slice(0, index);
    var zhongRight = zhong.slice(index + 1, zhong.length)
    var qianLeft = qian.slice(1, index + 1);
    var qianRight = qian.slice(index + 1, qian.length)
    // console.log(zhongLeft,zhongRight,qianLeft,qianRight)
    root.left = reduction1(qianLeft, zhongLeft);
    root.right = reduction1(qianRight, zhongRight);
    return root;
}

// console.log(reduction1(qian, zhong))

var zhong = ['g', 'c', 'f', 'a', 'e', 'b', 'd'];
var hou = ['g', 'f', 'c', 'e', 'd', 'b', 'a'];

function reduction2(zhong, hou) {
    if(zhong == null || hou == null || zhong.length == 0 || hou.length == 0 || zhong.length != hou.length) return null;
    var root = new Node(hou[hou.length - 1]);
    var index = zhong.indexOf(root.value);
    var zhongLeft = zhong.slice(0, index);
    var zhongRight = zhong.slice(index + 1, zhong.length);
    var houLeft = hou.slice(0, zhongLeft.length);
    var houRight = hou.slice(zhongLeft.length, hou.length - 1);
    root.left = reduction2(zhongLeft, houLeft);
    root.right = reduction2(zhongRight, houRight)
    return root;
}

function qianBian(root) {
    if (root == null || root.length == 0) return;
    console.log(root.value);
    qianBian(root.left);
    qianBian(root.right)
}
function houBian(root){
    if (root == null || root.length == 0) return;
    houBian(root.left);
    houBian(root.right);
    console.log(root.value);
}
// console.log(reduction2(zhong, hou))
qianBian(reduction2(zhong, hou))
console.log('------')
houBian(reduction1(qian, zhong))