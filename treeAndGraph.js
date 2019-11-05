//代码上下为两个部分  同时执行会有冲突 要分开使用
//树的遍历
function Node(value) {
    this.value = value;
    this.childs = [];
}

var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')
var f = new Node('f')
var g = new Node('g')
var h = new Node('h')

a.childs.push(b);
a.childs.push(c);
a.childs.push(d);
b.childs.push(h);
d.childs.push(e);
d.childs.push(f);
d.childs.push(g);

//树的深度优先搜索
function treeDeepSearch(root, target) {
    if (root == null) return false;
    if (root.value == target) return true;
    var result = false;
    for (var i = 0; i < root.childs.length; i++) {
        result |= treeDeepSearch(root.childs[i], target)
    }
    return result ? true : false
}
console.log(treeDeepSearch(a, 'h'), '1')
console.log(treeDeepSearch(a, 'c'), '2')
console.log(treeDeepSearch(a, 'e'), '3')

//树的广度优先搜索
function treeTransverseSearch(roots, target) {
    if (roots == null || roots.length == 0) return false;
    var path = []
    for (var i = 0; i < roots.length; i++) {
        if (roots[i].value == target) return true;
        else if (roots[i].childs) {
            path = path.concat(roots[i].childs)
        }
    }
    return treeTransverseSearch(path, target)
}
console.log(treeTransverseSearch([a], 'f'))

//图的深度优先搜索
function Node(value) {
    this.value = value;
    this.neighbor = [];
}
var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')
var f = new Node('f')
var g = new Node('g')

a.neighbor.push(b);
a.neighbor.push(d);
b.neighbor.push(a);
b.neighbor.push(c);
c.neighbor.push(b);
c.neighbor.push(d);
c.neighbor.push(e);
d.neighbor.push(g);
d.neighbor.push(f);
d.neighbor.push(c);
d.neighbor.push(a);
e.neighbor.push(c);
f.neighbor.push(d);
f.neighbor.push(g);
g.neighbor.push(d);
g.neighbor.push(f);

function graphDeepSearch(node, target, path) {
    if (node == null) return false;
    if (path.indexOf(node) > -1) return false;
    if (node.value == target) return true;
    path.push(node);
    var result = false;
    for (var i = 0; i < node.neighbor.length; i++) {
        result |= graphDeepSearch(node.neighbor[i], target, path)
    }
    return result ? true : false
}

console.log(graphDeepSearch(a, 'e', []))

//图的广度优先搜索
function graphTransverseSearch(nodes, target, path) {
    if (nodes == null || nodes.length == 0) return false;
    var list = [];
    for (var i = 0; i < nodes.length; i++) {
        if (path.indexOf(nodes[i]) > -1) continue;
        path.push(nodes[i]);
        if (nodes[i].value == target) return true;
        else list = list.concat(nodes[i].neighbor)
    }
    return graphTransverseSearch(list, target, path)
}

console.log(graphTransverseSearch([a], 'c', []), 1)



//动态规划之斐波那契数列  1、1、2、3、5、8、13、21、34、……
function digui(n){  //普通方式
    if (n <= 0) return -1
    if (n == 1) return 1;
    if (n == 2) return 1;
    var a = 1,
        b = 1,
        c = 0;
    for (var i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c
}

function fibonacci(n) { //动态规划方式
    if (n < 1) return -1;
    if (n == 1 || n == 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(10),digui(10))
// console.log(digui(100))



//动态规划之青蛙跳台阶
//青蛙一次只能跳一个或2个台阶，求有多少种方法可以跳到指定层级的台阶
function jump(n) {
    if(n < 1) return -1;
    if(n == 1) return 1;
    if(n == 2) return 2;
    return jump(n - 1) + jump(n - 2)
}
console.log(jump(4))

//动态规划之变态青蛙跳台阶
//问题和上面相同，但青蛙不限制一次跳的台阶数，可以随便跳，比较变态
function abnormalJump(n) {
    if(n < 1) return -1;
    if(n == 1) return 1;
    if(n == 2) return 2;
    // 1 2 4 8 16 ...
    var result = 0;
    for (var i = 1; i < n; i ++) {
        result += abnormalJump(n - i)
    }
    return result + 1;
}
console.log(abnormalJump(5))