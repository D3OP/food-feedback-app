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

    name: string;
    message: string;

    MyException(message) {
        this.name = "NullValuesException"
        this.message = message;
    }

    LargeDescription(message) {
        this.name = "LargeDescriptionException"
        this.message = message;
    }

    submitForm(form: NgForm) {
        if(this.menuItem.name == null && this.menuItem.restaurantName == null &&
            this.menuItem.description == null) { 
                this.MyException.prototype =new Error();
                this.MyException.prototype.constructor=this.MyException;
                throw new this.MyException('Fields are empty!');
            }
        else if (this.menuItem.description.length>20)
        {
            this.LargeDescription.prototype =new Error();
            this.LargeDescription.prototype.constructor=this.LargeDescription;
            throw new this.LargeDescription('Description cannot be more than 20 characters');
        }
        else
            {
            this.menuItemService.postMenuItem(this.menuItem)
            .subscribe(
                data =>{console.log('Success. Received response:  ', data),
                this.router.navigate(['/view-list'])},
                err => {console.log('error: ', err),
                this.router.navigate(['/view-list'])}               
            )              
            }
    }
}

