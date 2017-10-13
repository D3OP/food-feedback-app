import {Component, OnInit} from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { MenuItemService } from '../services/menu-item.service';
import { features } from '../../assets/features';

@Component({
    templateUrl: './menu-item-list.component.html',
})

export class MenuItemListComponent implements OnInit {
    menuItemList : MenuItem[];
    errorMessage : string;
    features: any;

    constructor(private menuItemService: MenuItemService) {

    }

    ngOnInit() {
        this.readMenuItems()
        this.features = features;
    }

    readMenuItems() {
       this.menuItemService.readMenuItems()
            .subscribe(
                menuItems => this.menuItemList = menuItems,
                menuError =>  this.errorMessage = <any>menuError
            )
    }

}