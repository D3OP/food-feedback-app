import 'zone.js';
import 'reflect-metadata';
import 'mocha';
import * as TypeMoq from "typemoq";
import { expect } from 'chai';
import { MenuItemListComponent } from "./menu-item-list.component";
import { MenuItemService } from "../services/menu-item.service";
import { MenuItem } from "../models/menu-item.model";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";



describe('In the file menu-item-list.component.ts', () => {
    describe('the MenuItemListComponent\'s', () => {

            let mockMenuItemService:TypeMoq.IMock<MenuItemService>;
            let mockMenuItemFirst:TypeMoq.IMock<MenuItem>;
            let mockMenuItemSecond:TypeMoq.IMock<MenuItem>;

            let menuItemListComponent: MenuItemListComponent;
            let activatedRoute: ActivatedRoute;

            beforeEach(() => {
                mockMenuItemService = TypeMoq.Mock.ofType(MenuItemService);
                mockMenuItemFirst = TypeMoq.Mock.ofType(MenuItem);
                mockMenuItemSecond = TypeMoq.Mock.ofType(MenuItem);

                activatedRoute = new ActivatedRoute();
                menuItemListComponent = new MenuItemListComponent(mockMenuItemService.object);
            });


            describe('readMenuItems', () => {
                it('will read a list of menu items', () => {
                    //given
                    mockMenuItemFirst.object.id = "1";
                    mockMenuItemFirst.object.name = "Tofu";
                    mockMenuItemFirst.object.description = "Yucky";
                    mockMenuItemFirst.object.restaurantName = "Hu Flung Dung";

                    mockMenuItemFirst.object.id = "2";
                    mockMenuItemFirst.object.name = "Ice Cream";
                    mockMenuItemFirst.object.description = "Mmmmm";
                    mockMenuItemFirst.object.restaurantName = "Slacking Robbins";

                    let mockMenuItemList = [mockMenuItemFirst.object, mockMenuItemSecond.object];


                    mockMenuItemService
                        .setup(x => x.readMenuItems())
                        .returns(() => Observable.of(mockMenuItemList));

                    //when
                    menuItemListComponent.readMenuItems();

                    //then
                    expect(menuItemListComponent.menuItemList).to.eql(mockMenuItemList);

                })

                it('will return an error when the an error is thrown by the service', () => {
                    //given
                    const error:string = "You really screwed up this time.";

                    mockMenuItemService
                        .setup(x => x.readMenuItems())
                        .returns(() => Observable.throw(error));

                    //when
                    menuItemListComponent.readMenuItems();


                    //then
                    expect(menuItemListComponent.errorMessage).to.equal(error);

                })
            });

        });
});