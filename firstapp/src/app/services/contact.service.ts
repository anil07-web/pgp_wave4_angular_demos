import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  Cube(num: number) {
    return num * num * num;
  }

  GetUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
