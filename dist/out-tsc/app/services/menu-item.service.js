var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
export var MenuItemService = (function () {
    function MenuItemService(http) {
        this.http = http;
    }
    MenuItemService.prototype.extractData = function (response) {
        var body = response.json();
        return body;
    };
    MenuItemService.prototype.handleError = function (error) {
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
    };
    MenuItemService.prototype.postMenuItem = function (menuItem) {
        var body = JSON.stringify(menuItem);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/menuitem', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MenuItemService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], MenuItemService);
    return MenuItemService;
}());
//# sourceMappingURL=/Users/ericreber/workspace/chiron/food-feedback-app/src/app/services/menu-item.service.js.map