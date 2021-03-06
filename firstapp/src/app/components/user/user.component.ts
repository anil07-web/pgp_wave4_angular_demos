import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:UserService) { }
  public posts;
  ngOnInit(): void {
    this.service.GetUsers().subscribe((postData: any) => {
      console.log(postData.data);
      this.posts = postData.data;
    }, (error) => {
      console.log(error);
    });
  }

}
