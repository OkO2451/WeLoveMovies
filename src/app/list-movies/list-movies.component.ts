import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../services/movie-search.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  allMovies: any[] = [];
  page = 1;
  totalPages: number = 1;

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieSearchService.getMovies(this.page).subscribe(data => {
      this.allMovies = data.results;
      this.totalPages = Math.ceil(data.total_results / data.results_per_page);
    });
  }

  handleKeySearch(keyword: string  ) {
    this.movieSearchService.getMoviesByKey(keyword,this.page).subscribe(data => {
      this.allMovies = data.results;
    });
  }

  clearSearch(){
    this.page = 1;
    this.movieSearchService.getMovies(this.page).subscribe(data => {
      this.allMovies = data.results;
    });
  }
  prevPage(event: Event) {
    event.preventDefault();
    if (this.page > 1) {
      this.page--;
      this.getAllMovies();
    }
  }
  
  nextPage(event: Event) {
    event.preventDefault();
    this.page++;
    this.getAllMovies();
  }
  
  goToPage(page: number, event: Event) {
    event.preventDefault();
    this.page = page;
    this.getAllMovies();
  }

}