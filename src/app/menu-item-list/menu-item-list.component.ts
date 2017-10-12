import {Component, OnInit} from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { MenuItemService } from '../services/menu-item.service';
import {FeatureToggleService} from "../services/feature-toggle-service";

@Component({
    templateUrl: './menu-item-list.component.html',
})

export class MenuItemListComponent implements OnInit {
    menuItemList : MenuItem[];
    errorMessage : string;

    constructor(private menuItemService: MenuItemService, featureToggleService: FeatureToggleService) {

    }



    ngOnInit() {
        this.readMenuItems()
    }

    readMenuItems() {
       this.menuItemService.readMenuItems()
            .subscribe(
                menuItems => this.menuItemList = menuItems,
                error =>  this.errorMessage = <any>error
            )
    }

}