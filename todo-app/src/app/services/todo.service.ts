import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  GetItems() {
    return this.http.get('http://localhost:3000/todoItems');
  }

  AddItem(item) {
    return this.http.post('http://localhost:3000/todoItems', item);
  }

  DeleteItem(id) {
    return this.http.delete(`http://localhost:3000/todoItems/${id}`);
  }

  UpdateItem(id, item) {
    return this.http.put(`http://localhost:3000/todoItems/${id}`, item);
  }
}
