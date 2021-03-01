import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TextprocessorComponent } from './components/textprocessor/textprocessor.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contact',
    component: ContactsComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
  { path: 'movies', component: MoviesComponent },
  { path: 'text', component: TextprocessorComponent },
  { path: 'user', component: UserComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

