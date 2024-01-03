import { Component, Output, EventEmitter } from '@angular/core';
import { MovieSearchService } from '../services/movie-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() search = new EventEmitter<string>();

  constructor(private movieSearchService: MovieSearchService) { }

  handleKeySearch(value: string) {
    // make it route to /
    
    this.search.emit(value);
  }

  clearSearch() {
    this.search.emit('');
  }
}