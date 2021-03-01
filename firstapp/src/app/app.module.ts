import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { TextprocessorComponent } from './components/textprocessor/textprocessor.component';
import { HomeComponent } from './components/home/home.component';
import { FactorialPipe } from './pipes/factorial.pipe';
import { PowerPipe } from './pipes/power.pipe';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HttpClientModule } from "@angular/common/http";
import { ContactService } from './services/contact.service';
import { MoviesComponent } from './components/movies/movies.component';
import { UserComponent } from './components/user/user.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    TextprocessorComponent,
    HomeComponent,
    FactorialPipe,
    PowerPipe,
    ContactsComponent,
    MoviesComponent,
    UserComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
