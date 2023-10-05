import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import {Product} from './product.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cartCount: number = 0;

  constructor(
    private cartService: CartService
  ) {}

  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.0,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_EQsBQLi9KRWIve9S8Z-uqnemoyVibiY9w&usqp=CAU'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20.0,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_EQsBQLi9KRWIve9S8Z-uqnemoyVibiY9w&usqp=CAU'
    }
  ];

  ngOnInit() {
    // Subscribe to changes in the cart item count
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  addToCart(product:Product) {
 
    this.cartService.addToCart(product);


  }
}
