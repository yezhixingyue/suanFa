//二维数据机构   二维拓扑结构
//二维数据结构是由线性数据结构中数组进化得来的  是一个表格   [[],[],[]]即是一个二维数据结构
//二维拓扑结构是由线性数据结构中链表进化得来的  类似一个关系图  拓扑只关乎关系 大小位置等差异都不相关

function arr1(){
    
    var arr = [];
    for (var j = 0;j < 4;j ++) {
        var arr1 = []
        for (var i = 0; i < 8; i ++) {
            arr1[i] = []
        }
        arr[j] = arr1
    }
    return arr
}
// console.log(arr())

var arr = new Array(4);
for (var i = 0 ;i < arr.length; i++) {
    arr[i] = new Array(8)
}
console.log(arr)

function Node(value) {
    this.value = value;
    this.neighbor = [];
}
var a =  new Node('a');
var b =  new Node('b');
var c =  new Node('c');
var d =  new Node('d');
var e =  new Node('e');
var f =  new Node('f');
var g =  new Node('g');

a.neighbor.push(b);
a.neighbor.push(d);
a.neighbor.push(e);
b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(f);
c.neighbor.push(b);
d.neighbor.push(a);
e.neighbor.push(a);
f.neighbor.push(b);