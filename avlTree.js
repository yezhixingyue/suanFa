//平衡二叉树

//查找一个平衡二叉树的度的值

function getDu(root) {  //查找二叉树的度
    if (root == null) return 0;
    var left = getDu(root.left);
    var right = getDu(root.right);
    return Math.max(left, right) + 1;
}

function isBalanceTree(root) {  //通过比较度的差值是否大于1来判断是否为二叉平衡树 
    if(root == null) return true;
    var leftH = getDu(root.left);
    var rightH = getDu(root.right);
    if (Math.abs(leftH - rightH) > 1) return false;
    else return isBalanceTree(root.left) && isBalanceTree(root.right)
}

function leftMove() {

}