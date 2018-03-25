import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieEditComponent implements OnInit {

  movie: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovie(this.route.snapshot.params['id']);
  }

  getMovie(id) {
    this.http.get('/movie/'+id).subscribe(data => {
      this.movie = data;
    });
  }

  updateMovie(id) {
    this.movie.updated_date = Date.now();
    this.http.put('/movie/'+id, this.movie)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/movie-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
