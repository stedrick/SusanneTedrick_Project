import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieComponent implements OnInit {

  moviess: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/movie').subscribe(data => {
      console.log(data);
      this.movies = data;
    });
  }

}
