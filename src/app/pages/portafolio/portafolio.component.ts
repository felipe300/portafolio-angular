import { Component, OnInit } from '@angular/core';
import { InfoProducts } from 'src/app/interfaces/info-products.interfaces';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public ProductoService: ProductosService) { }

  ngOnInit() {
  }

}
