import { Component, OnInit } from '@angular/core';
import { InfoPagesService } from 'src/app/services/info-pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public servicioInfoPages: InfoPagesService,
               private router: Router) { }

  ngOnInit() {
  }

  searchProducts(termino) {
    if ( termino > 1 ) {
      return;
    }
    this.router.navigate(['/search', termino ]);
  }
}
