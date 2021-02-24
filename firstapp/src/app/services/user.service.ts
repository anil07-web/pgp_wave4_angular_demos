import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  GetUsers() {
    return this.http.get('https://dummyapi.io/data/api/post', {
      headers: {
        'app-id': '603360ba2a6f0077004efd42'
      }
    });
  }
}
