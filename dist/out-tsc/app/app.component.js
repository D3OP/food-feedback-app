var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item.model';
import { MenuItemService } from './services/menu-item.service';
export var AppComponent = (function () {
    function AppComponent(menuItemService) {
        this.menuItemService = menuItemService;
        this.menuItem = new MenuItem("1", "RestaurantName", "Sandwich", "Real good");
    }
    AppComponent.prototype.submitForm = function (form) {
        this.menuItemService.postMenuItem(this.menuItem)
            .subscribe(function (data) { return console.log('Success. Received response:  ', data); }, function (err) { return console.log('error: ', err); });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [MenuItemService])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/ericreber/workspace/chiron/food-feedback-app/src/app/app.component.js.map