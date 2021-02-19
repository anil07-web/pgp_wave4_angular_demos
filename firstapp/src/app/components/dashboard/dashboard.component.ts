import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  public username: string = "John";
  public Id: string = "txt1";
  public isDisabled: boolean = false;
  public headingColor = "red";
  public isError = false;
  public myStyle = {
    color: "green",
    fontStyle: "italic",
    textDecoration: "underline"
  }
  public applyClass = true;

  public hasError = true;
  public applyClasses = {
    "text-red": this.hasError,
    "text-italic": !this.hasError,
    "text-bold": !this.hasError
  }

  Show(e) {
    // console.log('Welcome to StackRoute');
    console.log(e);
  }

  ShowText(text) {
    console.log(text);
  }

  public firstname: string;
  ngOnInit(): void {

  }

}
