import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

const appRoutes: Routes = [
  {
    path: 'movies',
    component: MovieComponent,
    data: { title: 'Movie List' }
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailComponent,
    data: { title: 'Movie Details' }
  },
  {
    path: 'movie-create',
    component: MovieCreateComponent,
    data: { title: 'Create Title' }
  },
  {
    path: 'movie-edit/:id',
    component: MovieEditComponent,
    data: { title: 'Movie Title' }
  },
  { path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent,
    MovieCreateComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
