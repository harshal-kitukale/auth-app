import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  cartItemCount: number = 0; // Initialize cart item count
  constructor(private cartService: CartService,private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Subscribe to changes in the cart item count
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }
  
  goToCart() {
    this.router.navigate(['/cart']);
  }

  logout(): void {
    this.authService.logout(); 
    this.router.navigate(['/login']);
  }
}
