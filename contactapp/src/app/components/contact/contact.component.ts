import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service: ContactService, private router: Router) { }
  public contacts;
  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.service.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  onDelete(id) {
    this.service.removeContact(id).subscribe(data => {
      this.getContacts();
    });
  }

}
