import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { MenuItemService } from '../services/menu-item.service';

@Component({
    templateUrl: './menu-item-list.component.html'
})

export class MenuItemListComponent implements OnInit {

    menuItemList : MenuItem[];

    constructor(private menuItemService: MenuItemService) {

    }

    ngOnInit() {
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