//不固定左右度值相差为一的二叉平衡树  二叉查找树
var arr = new Array();
for (var i = 0; i < 100000; i++) {
    var num = Math.round(Math.random() * 100000);
    arr.push(num)
}
var num = 0;

//普通方式在数组中寻找值
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

//提供一个根节点和一个数值，通过对比大小来判定位置串联生成二叉树的关系
function addNode(root, num) {
    if (root == null) return;
    if (root.value == num) return;
    if (root.value > num) {
        if (root.left == null) root.left = new Node(num);
        else addNode(root.left, num)
    } else {
        if (root.right == null) root.right = new Node(num);
        else addNode(root.right, num)
    }

}
//把数组生成为一个二叉树 -- 构建二叉搜索树
function buildBinaryTree(arr) {
    if (arr == null || arr.length == 0) return null;
    // if (!root) return;
    var node = new Node(arr[0]);
    for (var i = 0; i < arr.length; i++) {
        addNode(node, arr[i]);
    }
    return node;
}

//生成一个二叉树 得到其根节点
var root = buildBinaryTree(arr);
var i = 0;

//使用根节点在二叉树中寻找数值
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

//课堂源码 -- 构建二叉搜索树
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


//平衡二叉树

//查找一个平衡二叉树的度的值
function getDeep(root) {
    if (root == null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}
// console.log(getDeep(root))

//判断是否为二叉平衡树
function isBalanceTree(root) {
    if (root == null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) return false;
    else return isBalanceTree(root.left) && isBalanceTree(root.right)
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');

a.left = b;
a.right = c;
e.left = d;
c.left = e;
c.right = f;

// console.log(isBalanceTree(root))

//二叉树的右旋
function rightRotate(a) {   //
    if (a == null) return a;
    var node = a.left;
    a.left = node.right;
    node.right = a;
    return node;
}

//二叉树的左旋
function leftRotate(a) {    //左旋
    if (a == null) return a;
    var node = a.right;
    a.right = node.left;    //首先让旋转节点的right 等于 新根的left
    node.left = a;          //然后让新根的left等于旋转节点
    return node;
}

//普通二叉搜索树转换二叉平衡树
function changeToBalance(root) { //二叉搜索树转换至平衡二叉树
    if (isBalanceTree(root)) return root;
    //递归方式，先左再右最终再处理根节点，这个是后序递归遍历的一个应用；从下往上进行转换
    if(root.left != null) root.left = changeToBalance(root.left);
    if(root.right != null) root.right = changeToBalance(root.right); 
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) {
        //前四行代码为判定是否为特殊情况:变化子树的深度为当前节点的最大分支，如果是则先进行左右单旋或右左单旋
        var changeTreeDeep = getDeep(root.left.right);
        var noChangeTreeDeep = getDeep(root.left.left);
        if(changeTreeDeep > noChangeTreeDeep) {
            root.left = leftRotate(root.left) 
        }
        //下面两行代码为处理另外一种特殊情况：变化子树的深度大于旋转节点原有子树深度的值+2 ，这样变化子树旋转过来后会造成旋转节点
        //下面的不平衡，所以需要对变化的该部分进行新的一次平衡判断及修改(旋转)；因为二叉树左旋的时候，变化分支是加到了旋转节点的左
        //边部分子节点分支上面，即左旋时，旋转节点的左边发生变化，右旋时，旋转节点右边发现改变，所以，左旋时要对左边重新进行一次平
        //衡检测及修改，右旋则对右边进行一次重新检测和修改，这个可以称为左左旋转和右右旋转
        var newRoot = rightRotate(root);
        newRoot.right = changeToBalance(newRoot.right);
        //最后对最终返回的根节点重新进行一次平衡术的校验；并返回该节点（其为旋转节点，也是最终的根节点）
        return changeToBalance(newRoot);
    } else {
        var changeTreeDeep = getDeep(root.right.left);
        var noChangeTreeDeep = getDeep(root.right.right);
        if(changeTreeDeep > noChangeTreeDeep) {
            root.right = rightRotate(root.right) 
        }
        var node = leftRotate(root)
        node.left = changeToBalance(node.left);
        return changeToBalance(node)
    }
}

//在二叉平衡树的创建中，主要有3个部分组成：
//1. 二叉树的左旋和右旋，左边子树的深度大于右边+2时，即左边深右边浅，进行右旋；反之则左旋
//2. 左右双旋/右左双旋，当变化子树的高度是当前所在节点中的最大时，直接旋转该子树会造成新一轮的不平衡，代码中也可能会造成死循环；
//   这个时候就需要先对变化分支进行处理再行操作，处理方式即为：当整体旋转为左旋时，出现该情况需要对该分支子树进行右处理，即实现
//   把要变化的子树的高度调整为满足旋转条件(不是最大)；因为整体右旋时需要左旋，整体左旋时需要右旋，所以可称为左右双旋 右左双旋
//3. 左左旋转/右右旋转：当二叉树出现旋转时，需要对其旋转变化后的分支重新进行一次检测与修改，当左旋时，旋转节点的左边发生变化，要
//   对左边进行校验，右旋时旋转节点的右边发生变化，要对右边进行校验，所以称为左左旋转和右右旋转
var root1 = buildBinaryTree(arr);
var node = changeToBalance(root1)
// console.log(isBalanceTree(node))


i = 0;
console.log(searchInTree(node, 888), i) 