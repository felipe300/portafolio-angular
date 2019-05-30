import { Component } from '@angular/core';
import { InfoPagesService } from './services/info-pages.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public infoPages: InfoPagesService,
               public infoProducts: ProductosService ) {

  }
}
