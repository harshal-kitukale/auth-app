// import { Component } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   email: string = '';
//   password: string = '';

//   constructor(private router: Router) {}

//   onSubmit() {
//     // Implement the logic to handle form submission here
//     if (this.email === 'admin@gmail.com' && this.password === 'Abcd@1234') {
//       console.log('Login successful. Redirecting to dashboard...');
//       // Set the user as authenticated in AuthService
//       this.authService.login();
//       // Redirect to the dashboard here
//       this.router.navigateByUrl('/dashboard');
//     } else {
//       alert('Invalid email or password.');
//     }
//   }
  
//   emailFormControl = new FormControl('', [Validators.required, Validators.email]);
//   passwordFormControl = new FormControl('', [Validators.required]);
// }


import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {} // Inject AuthService

  onSubmit() {
    // Implement the logic to handle form submission here
    if (this.email === 'admin@gmail.com' && this.password === 'Abcd@1234') {
      console.log('Login successful. Redirecting to dashboard...');
      // Set the user as authenticated in AuthService
      this.authService.login();
      // Redirect to the dashboard here
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Invalid email or password.');
    }
  }
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
}
