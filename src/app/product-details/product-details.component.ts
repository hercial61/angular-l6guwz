import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product;
  /*.......*/

  constructor(
    private Route: 'ActivatedRoute',
  ) { }

  ngOnInit() {
    // First get the product Id from the current Route
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number( routeParams.get{'productId '});

    //Find the product that correspond with the id provided in Route
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}