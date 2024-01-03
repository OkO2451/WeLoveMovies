import { Component } from "@angular/core";
import { UserService } from "../services/user.service";
import { LoginService } from "../services/login.service"; // import LoginService
import { User } from '../models/user'; // import the User model
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [UserService]
})
export class LoginComponent {
  user: User = new User() ;// create a new User object
  constructor(private loginService: LoginService, private userService: UserService,private router: Router) {} // remove unused UserService

  login(form: NgForm) {
    if (this.user) {
    this.loginService
      .verifyUser(this.user.username, this.user.password) // use the verifyUser method from LoginService
      .subscribe((user) => {
        if (user) {
          
          this.userService.getCurrentUser().subscribe(user => {
            this.user = user;
            this.userService.setUser(user);
          });
           // set the returned user in UserService
          // debug
          console.log("LoginComponent.login(): User logged in.");
          this.router.navigate(['/user']);
        } else {
          // display an error message and clear the form
          alert("Invalid username or password.");
          this.user = new User();
          form.reset();
        }
      });

    } else {
      alert("User is not defined.");
    }
  }
}