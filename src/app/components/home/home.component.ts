import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flag :String="Click me";

  constructor() { }

  ngOnInit(): void {
  }

  clicking()
  {
    console.log("its clicked dude");
    this.flag="Thank you for clicking"
  }

}
