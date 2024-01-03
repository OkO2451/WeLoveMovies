import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../models/Movie";

@Injectable({
  providedIn: "root",
})
export class MovieSearchService {
  url: string =
    "https://api.themoviedb.org/3/movie/popular?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8";
  public currentItemId: number = 1;
  public setCurrentItemId = (id: number) => {
    this.currentItemId = id;
  };
  constructor(private http: HttpClient) {}
  getMovies(page: number) {
    return this.http.get<any>(this.url + "&page=" + page);
  }
  getMovieDetail = (id: number) => {
    const urlDetail =
      "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8&language=fr";
    return this.http.get<any>(urlDetail);
  };

  getMoviesByKey(key: string, page: number) {
    const urlKey =
      "https://api.themoviedb.org/3/search/movie?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8&language=fr&query=" +
      key +
      "&page=" +
      page +
      "&include_adult=false";
    return this.http.get<any>(urlKey);
  }
}
