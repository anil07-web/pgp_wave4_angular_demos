import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ContactService) { }

  public hasError = false;
  public username = 'john';
  public num = 5;
  public todayDate = new Date();
  public person = {
    emotion: 'happy'
  }
  public countries = ['India', 'Australia', 'England', 'Russia', 'China'];
  public products = [
    {
      id: 1,
      name: 'Camera',
      brand: 'Nikon',
      price: 25000
    },
    {
      id: 2,
      name: 'Mobile',
      brand: 'Apple',
      price: 45000
    },
    {
      id: 3,
      name: 'Tablet',
      brand: 'Samsung',
      price: 15000
    },
  ]
  ngOnInit(): void {
  }

  CheckEmotion(e) {
    this.person.emotion = e.target.id;
  }

}
