import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    {
      background-color: grey;
    }
    mat-form-field{
      margin: 1rem;
    }
  `]
})
export class LoginComponent {

  constructor( 
    private authService: AuthService,
    private router: Router) { }

  login () {
    this.authService.login()
			.subscribe( resp => {
				console.log(resp);

        if (resp.id) {
          this.router.navigate(['./heroes']);
        }
		});

  }

}
