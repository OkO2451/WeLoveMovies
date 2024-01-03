import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
// local storage

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080'; // replace with your API URL
  private currentUser: string = "";
  private user: User = new User();
  constructor(private http: HttpClient) { }

  verifyUser(username: string , password: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/verify/${username}/${password}`);
  }

  getUsername(): string {
    return this.currentUser;
  }

  setUsername(username: string): void {
    this.currentUser = username;
  }

  getUser(): string {
    return this.currentUser;
  }

  setUser(user: User): void {
    this.user = user;
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/me/`);
  }
}