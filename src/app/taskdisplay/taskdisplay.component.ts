import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  closeResult

   taskId: string;
   title: string;
   dueDate: string;
   description: string;
   priority: string;
   assignedTo: string;
   assignedDate: string;
   comments: string;
   status: string;

  taskArr:Task[] = [
    (new Task('1','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do')),
    (new Task('1','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do')),
    (new Task('1','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do')),
    (new Task('1','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do'))
  ];

  ngOnInit() {
  }


   // modal
   editPopup(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



   // modal
   private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }



}
