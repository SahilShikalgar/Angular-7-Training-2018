
class Task
{
	id:number;
	title:string;
	completed:boolean;
	date:Date;

	constructor(id:number , title:string)
	{
	this.id=id;
	this.title=title;
	this.completed=false;
	this.date = new Date();
	}

	showInfo()
	{
		console.log(this.id);
	}
}



let task = new Task(1,'sahil');
console.log(task.title);