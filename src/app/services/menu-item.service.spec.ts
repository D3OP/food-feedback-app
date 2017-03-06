import 'zone.js';
import 'reflect-metadata';
import 'mocha';
import * as TypeMoq from "typemoq";
import { expect } from 'chai';
import { MenuItemService } from "./menu-item.service";
import {Http, Response, ResponseOptions} from "@angular/http";
import {Observable} from "rxjs";
import {MenuItem} from "../models/menu-item.model";


describe('In the file menu-item.service.ts', () => {

    describe('the MenuItemService\'s', () => {
        let mockHttp:TypeMoq.IMock<Http>;

        let menuItemService: MenuItemService;


        beforeEach(() => {
            mockHttp = TypeMoq.Mock.ofType(Http);
            menuItemService = new MenuItemService(mockHttp.object);

        });


        describe('postMenuItem', () => {
            it('will create a menu item', () => {
                //given

                let menuItemRequest: MenuItem = new MenuItem();
                menuItemRequest.name = "Pizza";
                menuItemRequest.description = "Yummy";
                menuItemRequest.restaurantName = "Pizza King";

                let mockMenuItemResponse: MenuItem = new MenuItem();
                mockMenuItemResponse.name = "Pizza";
                mockMenuItemResponse.description = "Yummy";
                mockMenuItemResponse.restaurantName = "Pizza King";
                mockMenuItemResponse.id = "1";

                let responseOptions = new ResponseOptions ({
                    body: JSON.stringify(mockMenuItemResponse)
                });

                let mockResponse = new Response(responseOptions);

                mockHttp
                    .setup(x => x.post(TypeMoq.It.isAny(), TypeMoq.It.isAny(), TypeMoq.It.isAny()))
                    .returns(() => Observable.of(mockResponse));

                //when
                let responseMenuItem: MenuItem;
                menuItemService.postMenuItem(menuItemRequest)
                    .subscribe(
                        menuItem => responseMenuItem = menuItem
                    );

                //then
                expect(responseMenuItem).to.eql(mockMenuItemResponse);
            })

        });

        describe('readMenuItem', () => {
            it('will read a menu item', () => {
                //given
                let requestId = "1";

                let menuItem: MenuItem = new MenuItem();
                menuItem.name = "Pizza";
                menuItem.description = "Yummy";
                menuItem.restaurantName = "Pizza King";
                menuItem.id = "1";

                let responseOptions = new ResponseOptions ({
                    body: JSON.stringify(menuItem)
                });

                let mockResponse = new Response(responseOptions);

                mockHttp
                    .setup(x => x.get(TypeMoq.It.isAny(), TypeMoq.It.isAny()))
                    .returns(() => Observable.of(mockResponse));

                //when
                let responseMenuItem: MenuItem;
                menuItemService.readMenuItem(requestId)
                    .subscribe(
                        menuItem => responseMenuItem = menuItem
                    );

                //then
                expect(responseMenuItem).to.eql(menuItem);
            })

        });

        describe('readMenuItems', () => {
            it('will read all menu items', () => {
                //given
                let requestId = "1";

                let firstMenuItem: MenuItem = new MenuItem();
                firstMenuItem.name = "Pizza";
                firstMenuItem.description = "Yummy";
                firstMenuItem.restaurantName = "Pizza King";
                firstMenuItem.id = "1";

                let secondMenuItem: MenuItem = new MenuItem();
                secondMenuItem.name = "Burger";
                secondMenuItem.description = "Great";
                secondMenuItem.restaurantName = "Ivanhoe's";
                secondMenuItem.id = "2";

                let mockMenuItemList = [firstMenuItem, secondMenuItem];

                let responseOptions = new ResponseOptions ({
                    body: JSON.stringify(mockMenuItemList)
                });

                let mockResponse = new Response(responseOptions);

                mockHttp
                    .setup(x => x.get(TypeMoq.It.isAny(), TypeMoq.It.isAny()))
                    .returns(() => Observable.of(mockResponse));

                //when
                let responseMenuItems: MenuItem[];
                menuItemService.readMenuItems()
                    .subscribe(
                        menuItems => responseMenuItems = menuItems
                    );

                //then
                expect(mockMenuItemList).to.eql(responseMenuItems);
            })
        });


    });
});