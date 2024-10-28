import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {
    // Al inicializar, establecer una contraseña predeterminada si no existe
    if (!localStorage.getItem('password')) {
      localStorage.setItem('password', 'Admin');  // Contraseña predeterminada
    }
  }

  login() {
    const storedPassword = localStorage.getItem('password');  // Recupera la contraseña almacenada

    if (this.username === 'Admin' && this.password === storedPassword) {
      this.router.navigate(['/home'], { queryParams: { username: this.username } });
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
