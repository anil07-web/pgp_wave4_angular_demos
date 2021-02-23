import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private service: MovieService) { }
  public movie;
  ngOnInit(): void {

  }

  SearchMovie(moviename) {
    this.service.GetMovie(moviename.value).subscribe(data => {
      this.movie = data;
    });
  }

}
