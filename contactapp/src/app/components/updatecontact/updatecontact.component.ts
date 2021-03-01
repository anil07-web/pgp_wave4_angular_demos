import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit {

  constructor(private service: ContactService, private router: ActivatedRoute, private router2: Router) { }
  public contact = new Contact();
  public contactid;
  ngOnInit(): void {
    this.router.params.subscribe(route => {
      this.contactid = route.id;
      this.service.getContact(route.id).subscribe(data => {
        this.contact.firstname = data.firstname;
        this.contact.lastname = data.lastname;
        this.contact.email = data.email;
        this.contact.city = data.city;
        this.contact.phone = data.phone;
      });
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.service.updateContact(this.contactid, this.contact).subscribe(data => {
        this.router2.navigateByUrl('/');
      });
    } else {
      // if (form.form.controls.firstname.invalid) {
      //   form.form.controls.firstname.markAsDirty();
      // }
      alert('Please fix the errors');
    }
  }



}
