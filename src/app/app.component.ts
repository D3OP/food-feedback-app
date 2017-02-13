import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item.model';
import { MenuItemService } from './services/menu-item.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  menuItem = new MenuItem("1", "RestaurantName", "Sandwich", "Real good");

  constructor(private menuItemService:  MenuItemService) {

  }
  submitForm(form: NgForm) {
    this.menuItemService.postMenuItem(this.menuItem)
        .subscribe(
            data => console.log('Success. Received response:  ', data),
            err => console.log('error: ', err)
        )
  }


}


