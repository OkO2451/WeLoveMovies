import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user'; // import the User model
import { Router } from '@angular/router'; // import Router
import { NgForm } from '@angular/forms'; // import NgForm

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: User = new User(); // create a new User object
  
  constructor(private userService: UserService, private router: Router) { }

  signup(form: NgForm) {
    // give user.id a random number
    this.user.id = Math.floor(Math.random() * 1000);
    this.userService.saveUser(this.user).subscribe({
      next: (createdUser) => {
        // debug
        console.log('SignupComponent.signup(): user created.');
        console.log(createdUser);

        if (createdUser) {
          // handle successful signup
          console.log('User created successfully:', createdUser);
          // set the returned user in LoginService
          this.userService.getCurrentUser().subscribe(user => {
            this.user = user;
            this.userService.setUser(user);
          });
          this.userService.setUser(this.user);
          

          this.router.navigate(['/user']);
        } else {
          // display an error message and clear the form
          alert('Failed to create user. Please try again.');
          this.user = new User();
          form.reset();
        }
      },
      error: (err) => {
        // handle error
        alert('An error occurred while creating the user. Please try again later.');
        console.error('An error occurred:', err);
      }
    });
  }
}