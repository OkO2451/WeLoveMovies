import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Movie } from '../models/Movie'; // import Movie model
import { forkJoin } from 'rxjs'; // import forkJoin

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = this.userService.getUser();
  favoriteMovies: Movie[] = []; // add favoriteMovies property

  constructor(public userService: UserService) { // no need to inject MovieService

  }

  ngOnInit(): void {
    this.user = this.userService.getUser();

  // Get the user's favorite movies from local storage
  let favoriteMovieIds = this.userService.getFavoriteMovies(this.user.username);

  // Get an array of observables
  let observables = favoriteMovieIds.map(id => this.userService.getMovieDetail(id));

  // Use forkJoin to wait for all the observables to complete
  forkJoin(observables).subscribe(movies => {
    this.favoriteMovies = movies;
  });
  }
}