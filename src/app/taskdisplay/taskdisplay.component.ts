import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Status } from '../status';

@Component({
selector: 'app-taskdisplay',
templateUrl: './taskdisplay.component.html',
styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {

  // injecting modalService to use 'ng-modal'
  constructor(private modalService: NgbModal) { }

  // used for comparing data
  updatedItem;
  tempArr: Task[] = [];
  taskId: string;
  title: string;
  dueDate: string;
  description: string;
  priority: string;
  assignedTo: string;
  assignedDate: string;
  comments: string;
  status: string;


  // main Array for Task
  taskArr: Task[] = [
  (new Task('Y-001','Surgical','08/13/2019','Surgical request dashboard','High','Deepa Chittaragi','08/10/2019','work with the team','To-Do')),
  (new Task('Y-002','Surgical','08/13/2019','Surgical request dashboard','Low','Shivu K','08/10/2019','work with the team','To-Do')),
  (new Task('Y-003','Surgical','08/13/2019','Surgical request dashboard','Medium','Kiran','08/10/2019','work with the team','To-Do')),
  (new Task('Y-004','Surgical','08/13/2019','Surgical request dashboard','Low','Megha','08/10/2019','work with the team','In Progress')),
  (new Task('Y-005','Surgical','08/13/2019','Surgical request dashboard','Medium','Ankita','08/10/2019','work with the team','To-Do')),
  (new Task('Y-006','Surgical','08/13/2019','Surgical request dashboard','High','Mahesh','08/10/2019','work with the team','To-Do')),
  (new Task('Y-007','Surgical','08/13/2019','Surgical request dashboard','High','Abishek','08/10/2019','work with the team','To-Do')),
  (new Task('Y-008','Surgical','08/13/2019','Surgical request dashboard','Low','Praveen','08/10/2019','work with the team','QA Progress')),
  (new Task('Y-009','Surgical','08/13/2019','Surgical request dashboard','High','Kumar Swamy','08/10/2019','work with the team','To-Do')),
  (new Task('Y-010','Surgical','08/13/2019','Surgical request dashboard','High','Sujith','08/10/2019','work with the team','To-Do')),
  (new Task('Y-011','Surgical','08/13/2019','Surgical request dashboard','High','Vinay','08/10/2019','work with the team','To-Do')),
  ];

  // status array
  statusArr: Status[] = [
    new Status(1, 'To-Do'),
    new Status(2, 'In Progress'),
    new Status(3, 'Development Completed'),
    new Status(4, 'QA Progress'),
    new Status(5, 'System Testing Started'),
    new Status(6, 'System Testing Completed')
  ];

  // priority array
  priorityArr: string[] = ['Low', 'Medium', 'High'];

  ngOnInit() {
  }


  // task modal form
  editPopup(content, i) {

  this.taskId = this.taskArr[i].taskId;
  this.title = this.taskArr[i].title;
  this.dueDate = this.taskArr[i].dueDate;
  this.description = this.taskArr[i].description;
  this.priority = this.taskArr[i].priority;
  this.assignedTo = this.taskArr[i].assignedTo;
  this.assignedDate = this.taskArr[i].assignedDate;
  this.status = this.taskArr[i].status;
  this.comments = this.taskArr[i].comments;

  this.updatedItem = i;
  this.modalService.open(content, {size:'lg'});
  // this.modalService.dismissAll();
  }

  // Update Task
  onFormSubmit() {
    const data = this.updatedItem;
    for (let i = 0; i < this.taskArr.length; i++) {
      if (i === data) {
        this.taskArr[i].taskId = this.taskId;
        this.taskArr[i].title = this.title;
        this.taskArr[i].dueDate = this.dueDate;
        this.taskArr[i].description = this.description;
        this.taskArr[i].priority = this.priority;
        this.taskArr[i].assignedTo = this.assignedTo;
        this.taskArr[i].assignedDate = this.assignedDate;
        this.taskArr[i].comments = this.comments;
        this.taskArr[i].status = this.status;


        console.log(this.taskArr);
        this.taskId = '';
        this.title = '';
        this.dueDate = '';
        this.description = '';
        this.priority = '';
        this.assignedTo = '';
        this.assignedDate = '';
        this.comments = '';
        this.status = '';

        alert('Updated Successfully');
      }
    }
    this.modalService.dismissAll();
  }
}
