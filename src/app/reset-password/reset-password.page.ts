import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string;

  constructor(private router: Router) {
    this.username = ''; 
   }

  resetPassword() {
    alert('Instrucciones enviadas al correo de ' + this.username);
    this.router.navigate(['/login']);
  }
}
