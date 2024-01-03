import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user"; // import the User model
import { Movie } from "../models/Movie";
import { switchMap } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = "http://localhost:8080"; // replace with your API URL
  private static user: User = new User(); // create a new User object

  constructor(private http: HttpClient) {}

  verifyUser(username: string, password: string): Observable<User> {
    return this.http.get<User>(
      `${this.apiUrl}/users/verify/${username}/${password}`
    );
  }

  getUid(username: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/users/${username}`);
  }

  saveUser(user: User): Observable<User> {
    // sabe it to local storage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("auth", "true");

    // use the User model here
    return this.http.post<User>(`${this.apiUrl}/users/`, user);
  }

  logout(): void {
    localStorage.setItem("auth", "false");
    localStorage.setItem("user", "");
  }

  // New method for creating a new user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/new`, user);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/me/`);
  }

  setUser(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
    UserService.user = user;
  }

  getUser(): User {
    // update user using verifyUser
    this.verifyUser(
      UserService.user.username,
      UserService.user.password
    ).subscribe((user: User) => {
      if (user) {
        console.log("UserService.getUser(): user found.");
        UserService.user.id = user.id;
      }
    });

    let user = localStorage.getItem("user");
    if (user) {
      UserService.user = JSON.parse(user);
    }

    return UserService.user;
  }

  addFavoriteMovie(username: string, movieId: number): void {
    // Get the user's favorite movies from local storage
    let favoriteMovies = JSON.parse(localStorage.getItem(username) || "[]");
  
    // Add the new movie ID to the list
    favoriteMovies.push(movieId);
  
    // Save the updated list back to local storage
    localStorage.setItem(username, JSON.stringify(favoriteMovies));
  }
  
  getFavoriteMovies(username: string): number[] {
    // Get the user's favorite movies from local storage
    let favoriteMovies = JSON.parse(localStorage.getItem(username) || "[]");
  
    // Return the list of favorite movies
    return favoriteMovies;
  }

  getMovieDetail(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8`
    );
  }
}
