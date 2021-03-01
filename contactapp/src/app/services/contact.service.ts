import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact> {
    return this.http.get<Contact>('http://localhost:3000/contacts');
  }

  getContact(id): Observable<Contact> {
    return this.http.get<Contact>(`http://localhost:3000/contacts/${id}`);
  }

  addContact(contact) {
    return this.http.post('http://localhost:3000/contacts', contact);
  }

  removeContact(id) {
    return this.http.delete(`http://localhost:3000/contacts/${id}`);
  }

  updateContact(id, contact) {
    return this.http.put(`http://localhost:3000/contacts/${id}`, contact);
  }
}
