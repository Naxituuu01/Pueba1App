import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';  // Para mostrar alertas

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = '';  // Inicializa la variable de usuario
  newPassword: string = '';  // Nueva contraseña
  confirmPassword: string = '';  // Confirmar contraseña

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

    // Simula la actualización de la contraseña
    if (this.username === 'Admin') {  // Puedes cambiar esta lógica según tus necesidades
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
