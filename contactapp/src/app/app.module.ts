import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddcontactComponent } from './components/addcontact/addcontact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UpdatecontactComponent } from './components/updatecontact/updatecontact.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    AddcontactComponent,
    HeaderComponent,
    FooterComponent,
    UpdatecontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
