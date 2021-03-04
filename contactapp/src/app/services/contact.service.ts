import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact> {
    return this.http.get<Contact>(environment.url);
  }

  getContact(id): Observable<Contact> {
    return this.http.get<Contact>(`${environment.url}/${id}`);
  }

  addContact(contact) {
    return this.http.post(environment.url, contact);
  }

  removeContact(id) {
    return this.http.delete(`${environment.url}/${id}`);
  }

  updateContact(id, contact) {
    return this.http.put(`${environment.url}/${id}`, contact);
  }

  login(user) {
    return this.http.post(environment.authUrl, user);
  }

  isLoggedIn(token) {
    return this.http.post(`${environment.authUrl}/isAuthenticated`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  tokenExists() {
    if (localStorage.getItem('token'))
      return true;
    else
      return false;
  }

  addNumbers(num1: number, num2: number) {
    return num1 + num2;
  }
}
