import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor(private service: ContactService, private router: Router) { }
  public contact = new Contact;
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.service.addContact(this.contact).subscribe(data => {
        this.router.navigateByUrl('/');
      });
    } else {
      // if (form.form.controls.firstname.invalid) {
      //   form.form.controls.firstname.markAsDirty();
      // }
      alert('Please fix the errors');
    }
  }

}
