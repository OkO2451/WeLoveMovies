import {Component, Input} from '@angular/core';
import {Movie} from "../models/Movie";
import {MovieSearchService} from "../services/movie-search.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie!: Movie ;
  @Input() prodItem: any;
  detailService:MovieSearchService=new MovieSearchService(this.http)

  handleDetailClick(id: number) {
    //this.detailService.setCurrentItemId(id);
    this.router.navigateByUrl("/movie-detail/"+id);

  }
  constructor(private http: HttpClient, private router:Router, private userService: UserService ) {
  }

  handleFavoriteClick(id: number) {
    this.userService.addFavoriteMovie(this.userService.getUser().username, id);
  }
}
