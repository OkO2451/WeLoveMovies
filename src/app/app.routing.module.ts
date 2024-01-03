import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListMoviesComponent } from "./list-movies/list-movies.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { SignupComponent } from "./signup/signup.component";
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "", component: ListMoviesComponent },

  {
    path: "movie-detail/:id",
    component: MovieDetailsComponent,
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
