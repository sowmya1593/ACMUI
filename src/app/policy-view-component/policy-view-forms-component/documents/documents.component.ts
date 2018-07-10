import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  plus=true;

  constructor(private modalService: NgbModal) { }
  
  open(content) {
   this.modalService.open(content);
  }
  
  changeButton(){
    this.plus=false;
  }
  
  close(){
    this.plus=true;
  }
  

  ngOnInit() {
  }

}
