import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:8080'; // replace with your API URL

  constructor(private http: HttpClient) { }

  getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments/${id}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiUrl}/comments/`, comment);
  }
}