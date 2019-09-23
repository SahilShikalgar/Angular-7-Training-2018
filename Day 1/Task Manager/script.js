
var Task = function(i,t) {
    this.id=i;
    this.title=t;
}
    Task.prototype.date = new Date();
    Task.prototype.completed=false;
    Task.prototype.showDetail = function() {
        console.log( this.id , this.title , this.date , this.completed );
    }
//Model

var tasks = [ new Task(1,'Learn Angular') , new Task(2,'Learn Boostrap') , new Task(3,'Learn NodeJS') , new Task(4,'Learn JavaScript')];

//view logic
var task = document.getElementById('task');
var taskList = document.querySelector('.list-group');

function Add()
{
    taskList.innerHTML= '';
    tasks.forEach(function (taskElement,index){
      /*  var taskItem = '<li class="list-group-item">'+taskElement.id+" -  "+taskElement.title+'</li>';
        taskList.innerHTML += taskItem;*/

        var taskItem = document.createElement('li');   
        taskItem.innerText = taskElement.id+' - '+taskElement.title;
        taskItem.classList.add('list-group-item');
        taskList.appendChild(taskItem);
        //console.log(index);
    });
}

Add();
function addTask(event)
{
    event.preventDefault();

    if(task.value.trim()!='')
    {
        var newTask = new Task(tasks.length+1,task.value);
        tasks.push(newTask);
        task.value='';
        Add();
    }
    else
    {
        task.classList.add('is-invalid');
        task.focus();
    }

 //   console.log(task.value);
 //  console.log(taskList);    //while ul tag with li's
}
