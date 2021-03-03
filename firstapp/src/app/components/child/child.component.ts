import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input()
  public parentData;

  @Output()
  public childEvent = new EventEmitter();
  ngOnInit(): void {}

  onClick() {
    this.childEvent.emit('Welcome Peter');
  }
}
