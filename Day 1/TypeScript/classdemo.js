var Task = /** @class */ (function () {
    function Task(id, title) {
        this.id = id;
        this.title = title;
        this.completed = false;
        this.date = new Date();
    }
    Task.prototype.showInfo = function () {
        console.log(this.id);
    };
    return Task;
}());
var task = new Task(1, 'sahil');
console.log(task.title);
