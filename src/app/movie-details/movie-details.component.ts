import { Component } from "@angular/core";
import { MovieSearchService } from "../services/movie-search.service";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"],
})
export class MovieDetailsComponent {
  idFilm: number = 1;
  detailService: MovieSearchService = new MovieSearchService(this.http);
  film: any;

  constructor(public route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.idFilm = this.route.snapshot.params["id"];
    this.detailService.getMovieDetail(this.idFilm).subscribe((data) => {
      this.film = data;
      console.log(this.film);
    });
  }
}