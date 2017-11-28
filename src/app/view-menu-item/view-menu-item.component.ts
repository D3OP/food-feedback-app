import 'zone.js';
import 'reflect-metadata';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MenuItem } from '../models/menu-item.model';
import { MenuItemService } from '../services/menu-item.service';
import { features } from '../features';


@Component({
    templateUrl: './view-menu-item.component.html'
})

export class ViewMenuItemComponent implements OnInit {
    menuItem = new MenuItem();
    id : string;
    errorMessage: string;
    features: any;

    constructor(private activatedRoute: ActivatedRoute, private menuItemService: MenuItemService) {
        this.features = features;
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
        });
        this.readMenuItem(this.id)
    }

    readMenuItem(id: string) {
        this.menuItemService.readMenuItem(id)
            .subscribe(
                menuItem => this.menuItem = menuItem,
                error =>  this.errorMessage = <any>error
            )
    }
}


