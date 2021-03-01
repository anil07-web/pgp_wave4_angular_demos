import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './components/addcontact/addcontact.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdatecontactComponent } from './components/updatecontact/updatecontact.component';
import { Contact } from './models/contact';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'addcontact', component: AddcontactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'updatecontact/:id', component: UpdatecontactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
