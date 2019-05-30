import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductsDetails } from 'src/app/interfaces/products-details';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productDesc: ProductsDetails;

  productID: string;

  constructor( private route: ActivatedRoute,
               public productServicio: ProductosService ) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      this.productServicio.getProduct(parametros['id'])
      .subscribe( (producto: ProductsDetails) => {
        this.productDesc = producto;
        this.productID = parametros['id'];
      });
    });
  }

}
