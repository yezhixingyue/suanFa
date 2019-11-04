var pointSet = [];
var max = 1000000;
var distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
];

function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

function isture(nowPointSet, nowPoint, corPoint) {
    if (nowPoint == corPoint) return false;
    if (nowPointSet == null || nowPointSet.length == 0) return true;
    for (var i = 0; i < nowPointSet.length; i++) {
        if(nowPointSet[i].indexOf(nowPoint) >= 0 && nowPointSet[i].indexOf(corPoint) >= 0){
            return false;
        }
    }

    return true;
}

function getPointItem(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(item) > -1) {
            return arr[i]
        }
    }
    return null;
}

function addPointset(nowPointSet, startPoint, endPoint) {
    var startPointSet = getPointItem(nowPointSet, startPoint);
    var endPointSet = getPointItem(nowPointSet, endPoint);
    if (startPointSet == null && endPointSet == null) {
        var arr = new Array();
        arr.push(startPoint);
        arr.push(endPoint);
        nowPointSet.push(arr)
    } else if (startPointSet != null && endPointSet == null) {
        startPointSet.push(endPoint)
    } else if (startPointSet == null && endPointSet != null) {
        endPointSet.push(startPoint);
    } else if (startPointSet != null && endPointSet != null) {
        startPointSet.push(...endPointSet);
        nowPointSet.splice(nowPointSet.indexOf(endPointSet),1)
    }
}



function kruskal(pointSet, distance) {
    if (pointSet == null || distance == null) return;
    var nowPointSet = []; //记录已串联的组合
    while (true) {

        var startPoint = null;
        var endPoint = null;
        max = 1000000;
        for (let i = 0; i < pointSet.length; i++) {
            var nowPoint = pointSet[i];
            var disArr = distance[i];
            for (let j = 0; j < distance[i].length; j++) {
                var corPoint = pointSet[j];
                if (disArr[j] < max && isture(nowPointSet, nowPoint, corPoint)) {
                    startPoint = nowPoint;
                    endPoint = corPoint;
                    max = disArr[j]
                }
            }
        }
        startPoint.neighbor.push(endPoint);
        endPoint.neighbor.push(startPoint);
        addPointset(nowPointSet, startPoint, endPoint)

        if (nowPointSet.length == 1 && nowPointSet[0].length == pointSet.length) {
            break;
        }
    }
}

kruskal(pointSet, distance)

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
console.log(pointSet)