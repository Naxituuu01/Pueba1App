import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private alertCtrl: AlertController) { }

  async resetPassword() {
    if (!this.username) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, ingresa un nombre de usuario',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (!this.newPassword || !this.confirmPassword) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, ingresa y confirma tu nueva contraseña',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Simula la actualización de la contraseña en localStorage
    if (this.username === 'Admin') {
      localStorage.setItem('password', this.newPassword);  // Actualiza la contraseña en localStorage

      const successAlert = await this.alertCtrl.create({
        header: 'Éxito',
        message: 'La contraseña ha sido actualizada exitosamente para ' + this.username,
        buttons: ['OK']
      });
      await successAlert.present();

      // Redirigir a la página de login
      this.router.navigate(['/login']);
    } else {
      const errorAlert = await this.alertCtrl.create({
        header: 'Error',
        message: 'No se encontró el usuario ' + this.username,
        buttons: ['OK']
      });
      await errorAlert.present();
    }
  }
}
