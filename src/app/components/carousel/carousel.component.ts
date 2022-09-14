import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  products: Products[];
  responsiveOptions: any;
  constructor() {
    this.products = [
      {
        name: 'CyZone',
        image: 'assets/images/CyZone.jpg',
      },
      {
        name: 'Avon',
        image: 'assets/images/Avon.jpg',
      },
      {
        name: 'Yanbal',
        image: 'assets/images/Yanbal.jpg',
      },
      {
        name: 'Ésika',
        image: 'assets/images/Esika.jpg',
      },
      {
        name: 'Oriflame',
        image: 'assets/images/Oriflame.jpg',
      },
      {
        name: 'Duppre',
        image: 'assets/images/Duppre.jpg',
      },
      {
        name: 'Natura',
        image: 'assets/images/Natura.jpg',
      },
      {
        name: 'Pacifika',
        image: 'assets/images/Pacifika.jpg',
      },
      {
        name: 'Aquarella',
        image: 'assets/images/Aquarella.jpg',
      },
    ]
  }
  ngOnInit(): void {
  }

}
