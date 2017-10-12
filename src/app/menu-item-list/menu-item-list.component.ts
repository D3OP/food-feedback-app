import {Component, OnInit} from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { MenuItemService } from '../services/menu-item.service';
import {FeatureToggleService} from "../services/feature-toggle-service";

@Component({
    templateUrl: './menu-item-list.component.html',
})

export class MenuItemListComponent implements OnInit {
    menuItemList : MenuItem[];
    menuErrorMessage : string;
    features: Map<string, string>;
    featureErrorMessage: string;


    constructor(private menuItemService: MenuItemService, private featureToggleService: FeatureToggleService) {

    }

    ngOnInit() {
        this.readFeatures()
        this.readMenuItems()
    }

    readMenuItems() {
       this.menuItemService.readMenuItems()
            .subscribe(
                menuItems => this.menuItemList = menuItems,
                menuError =>  this.menuErrorMessage = <any>menuError
            )
    }

    readFeatures() {
        this.featureToggleService.getFeatures().subscribe(
            features => this.features = features,
            featureError => this.featureErrorMessage = <any>featureError
        );
    }

}