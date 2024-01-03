import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ListMoviesComponent } from "./list-movies/list-movies.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { HttpClientModule } from "@angular/common/http";
import { MovieItemComponent } from "./movie-item/movie-item.component";
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing.module";
import { CommentComponent } from "./comment/comment.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    MovieDetailsComponent,
    MovieItemComponent,
    CommentComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
