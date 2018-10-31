import { Component } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { MenuItemService } from '../services/menu-item.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { features } from '../features';


@Component({
    templateUrl: './create-menu-item.component.html'
})

export class CreateMenuItemComponent {
    menuItem = new MenuItem();
    features: any;

    constructor(private router:Router, private menuItemService: MenuItemService) {
        this.features = features;
    }

    submitForm(form: NgForm) {
        this.menuItemService.postMenuItem(this.menuItem)
            .subscribe(
                data =>{console.log('Success. Received response:  ', data),
                this.router.navigate(['/view-list'])},
                err => {console.log('error: ', err),
                this.router.navigate(['/view-list'])}
            )
        
    }
}

