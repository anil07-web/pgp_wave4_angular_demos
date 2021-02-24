import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  public todoItems;
  constructor(private service: TodoService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.service.GetItems().subscribe((data) => {
      this.todoItems = data;
    });
  }

  addItem(item: string) {
    this.service.AddItem({
      todoitem: item,
      iscompleted: false
    }).subscribe(data => {
      this.getItems();
    });
  }

  deleteItem(id) {
    this.service.DeleteItem(id).subscribe(data => {
      this.getItems();
    });
  }

  updateItem(item) {
    this.service.UpdateItem(item.id, {
      todoitem: item.todoitem,
      iscompleted: item.iscompleted ? false : true
    }).subscribe(data => {
      this.getItems();
    })
  }

}
