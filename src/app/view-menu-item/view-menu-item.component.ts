import 'zone.js';
import 'reflect-metadata';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MenuItem } from '../models/menu-item.model';
import { MenuItemService } from '../services/menu-item.service';


@Component({
    templateUrl: './view-menu-item.component.html'
})

export class ViewMenuItemComponent implements OnInit {
    menuItem = new MenuItem();
    id : string;

    constructor(private activatedRoute: ActivatedRoute, private menuItemService: MenuItemService) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
        });
        this.readMenuItem(this.id)
    }

    readMenuItem(id: string) {
        console.log(id)
        this.menuItemService.readMenuItem(id)
            .subscribe(
                menuItem => this.menuItem = menuItem,
                err => console.log('error: ', err)
            )
        console.log(this.menuItem)
    }
}