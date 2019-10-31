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
    this.neighbor = []
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

function getIndex(arr, key) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].value == key.value) return i
    }
    return -1
}

function getMinDisNode(pointSet, distance, nowPointSet) {
    var minDistance = max;
    var startPoint = null;
    var endPoint = null;
    for (var i = 0; i < nowPointSet.length; i++) {
        var point = nowPointSet[i];
        var index = getIndex(pointSet, point);
        for (var j = 0; j < distance[index].length; j++) {
            var curPoint = pointSet[j];
            // console.log(curPoint,111)
            if (getIndex(nowPointSet, curPoint) < 0 && distance[index][j] < minDistance) {
                startPoint = curPoint;
                // console.log(startPoint,222)
                endPoint = point;
                minDistance = distance[index][j]
            }
        }
    }
    // console.log(startPoint,333)
    startPoint.neighbor.push(endPoint);
    endPoint.neighbor.push(startPoint);
    return startPoint;

}

function prim(pointSet, distance, start) {
    var nowPointSet = [];
    nowPointSet.push(start);
    while (true) {
        var minDisNode = getMinDisNode(pointSet, distance, nowPointSet);
        nowPointSet.push(minDisNode);
        if (pointSet.length == nowPointSet.length) {
            break
        }
    }
}

prim(pointSet, distance, c)
console.log(pointSet)