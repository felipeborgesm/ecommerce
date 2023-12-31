import { CartItem } from './../../models/cart.model';
import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private _cart: Cart = { items: [] }
  itemsQuantity = 0

  @Input() 
  get cart() : Cart {
    return this._cart
  }

  set cart(cart: Cart) {
    this._cart = cart

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((previous, current) => previous + current ,0)
  }

  constructor(private cartService: CartService) {}

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)
  }

  onClearCart() {
    return this.cartService.clearCart()
  }
}
