import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private service: ContactService) { }
  public users;
  ngOnInit(): void {
    // console.log(this.service.Cube(5));
    this.service.GetUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

}
