import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor() { }
  public contact = new Contact;
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {

    } else {
      // if (form.form.controls.firstname.invalid) {
      //   form.form.controls.firstname.markAsDirty();
      // }
      alert('Please fix the errors');
    }
  }

}
