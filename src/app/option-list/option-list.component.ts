import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.css']
})
export class OptionListComponent implements OnInit {
  color: String;

  constructor() { }

  ngOnInit() {
  
  }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.color = 'online';
      console.log('You are 100px from the top to bottom');
    } else {
        this.color = 'offline';
        console.log('You are 500px from the top to bottom');
    }

  }
  
  getColor() {
    return this.color === 'online' ? '#ffffff' : 'white';
  }
  
  getOpacity(){
    return this.color === 'online'? 0.8 : 1;
  }

}
