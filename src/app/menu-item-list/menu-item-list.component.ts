import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../models/menu-item.model';
import { MenuItemService } from '../services/menu-item.service';

@Component({
    templateUrl: './menu-item-list.component.html'
})

export class MenuItemListComponent {

    menuItemList : MenuItem[];

    constructor(private router: Router, private menuItemService: MenuItemService) {
        this.readMenuItems()
    }

    readMenuItems() {
       this.menuItemService.readMenuItems()
            .subscribe(
                menuItems => this.menuItemList = menuItems,
                err => console.log('error: ', err)
            )
    }

}