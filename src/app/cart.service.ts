// cart.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './dashboard/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = []; // Initialize an empty cart array
  private cartItemCountSubject = new Subject<number>();

  cartItemCount$ = this.cartItemCountSubject.asObservable();

  addToCart(item: Product) {
    this.cartItems.push(item);
    this.updateCartItemCount(); 
    console.log(this.cartItems)
  }

  getCartItemCount(): number {
    return this.cartItems.length;
  }
  updateCartItemCount() {
    const count = this.cartItems.length;
    this.cartItemCountSubject.next(count);
  }
  getCartItems(): Product[] {
    return this.cartItems;
  }
  // You can add methods to remove items or clear the cart as needed.
}
