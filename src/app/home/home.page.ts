import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = 'Admin'; // Usuario que inició sesión
  searchTerm: string = ''; // Término de búsqueda inicializado

  constructor(private navCtrl: NavController) {}

  buscarComida() {
    if (this.searchTerm.trim()) {
      // Aquí puedes integrar tu lógica para llamar a una API y buscar alimentos con el término
      console.log(`Buscando comidas con término: ${this.searchTerm}`);
      // Ejemplo de llamado a API con filtros (requiere implementación en el servicio)
      // Implementación de API para buscar comida, usando this.searchTerm como filtro.
    } else {
      console.log('Por favor, ingrese un término de búsqueda.');
    }
  }

  irAPagina(pagina: string) {
    this.navCtrl.navigateForward(`/${pagina}`);
  }
}
