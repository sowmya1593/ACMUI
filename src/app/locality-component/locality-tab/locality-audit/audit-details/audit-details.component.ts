import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-audit-details',
  templateUrl: './audit-details.component.html',
  styleUrls: ['./audit-details.component.css']
})
export class AuditDetailsComponent implements OnInit {
  public showSection: boolean = false;
 
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open(content) {
     this.modalService.open(content);
}
   selectBox(systemType) {
    this.showSection = true;


  }
  

}
