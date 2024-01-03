import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  constructor(private http: HttpClient) { }

  getMovies(keyword: string): Observable<any> {
    // Replace with your actual API URL and API key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${keyword}`;
    return this.http.get(url);
  }
}