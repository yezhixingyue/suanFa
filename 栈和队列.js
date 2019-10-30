//一种新的数据结构：栈和队列
//栈的特点：先入后出        像箱子一样 箱子底的东西到最后才能拿出
//队列特点：先入先出        像管道一样 从上面进从下面出  取出顺序和栈刚好相反

//栈
function Stack() {
    this.list = [];
    this.push = function (value) {
        this.list.push(value)
    };
    this.pop = function () {
        return this.list.pop()
    }
}
//队列
function Queue() {
    this.list = [];
    this.push = function (value) {
        this.list.push(value)
    };
    this.pop = function () {
        return this.list.shift()
    }
}
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack)
stack.pop();
console.log(stack)

var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue);
queue.pop();
console.log(queue);

//由于js语言中的arr数组函数封装的特别好，有push、pop、shift、unshift等方法，
//相对其他语言可以非常简单快速的模拟出栈和队列的原理