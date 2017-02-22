import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { MenuItemService } from '../services/menu-item.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    templateUrl: './create-menu-item.component.html'
})

export class CreateMenuItemComponent implements OnInit {
    menuItem = new MenuItem();

    constructor(private router:Router, private menuItemService: MenuItemService) {

    }

    ngOnInit() {

    }

    submitForm(form: NgForm) {
        this.menuItemService.postMenuItem(this.menuItem)
            .subscribe(
                data => console.log('Success. Received response:  ', data),
                err => console.log('error: ', err)
            )
        this.router.navigate(['/view-list']);
    }
}