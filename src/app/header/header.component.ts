import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'activeBox';
  navItems = [    
    "Home",
    "About",
    "Description",
    "Download",
    "Exit"
  ]

  constructor() {
    
  }
  text: number = 0;
  onClick(){
    this.text++;
    console.log(this.text)
  }
  ngOnInit() {
  }

}
