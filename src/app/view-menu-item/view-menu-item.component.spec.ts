import 'zone.js';
import 'reflect-metadata';
import 'mocha';
import * as TypeMoq from "typemoq";
import { expect } from 'chai';
import {ViewMenuItemComponent} from "./view-menu-item.component";
import {MenuItemService} from "../services/menu-item.service";
import {Observable} from "rxjs";
import {MenuItem} from "../models/menu-item.model";
import {ActivatedRoute} from "@angular/router";


describe('In the file menu-item-list.component.ts', () => {


    describe('the ViewMenuItemComponent\'s', () => {

        let mockMenuItemService:TypeMoq.IMock<MenuItemService>;
        let mockMenuItem:TypeMoq.IMock<MenuItem>;

        let viewMenuItemComponent: ViewMenuItemComponent;
        let activatedRoute: ActivatedRoute;

        beforeEach(() => {
            mockMenuItemService = TypeMoq.Mock.ofType(MenuItemService);
            mockMenuItem = TypeMoq.Mock.ofType(MenuItem);

            activatedRoute = new ActivatedRoute();
            viewMenuItemComponent = new ViewMenuItemComponent(activatedRoute, mockMenuItemService.object);
        });


        describe('readMenuItem', () => {
            it('will read a menu item when one is present', () => {
                //given
                mockMenuItem.object.name = "Pizza";
                mockMenuItem.object.description = "Yummy";
                mockMenuItem.object.restaurantName = "Pizza King";
                mockMenuItem.object.id = "1";

                mockMenuItemService
                    .setup(x => x.readMenuItem(TypeMoq.It.isAny()))
                    .returns(() => Observable.of(mockMenuItem.object));

                //when
                viewMenuItemComponent.readMenuItem("1");


                //then
                expect(viewMenuItemComponent.menuItem).to.eql(mockMenuItem.object);

            })

            it('will return an error when the requested menu item is not present', () => {
                //given
                const error:string = "You really screwed up this time.";
                const id:string = "blah";

                mockMenuItemService
                    .setup(x => x.readMenuItem(TypeMoq.It.isAny()))
                    .returns(() => Observable.throw(error));

                //when
                viewMenuItemComponent.readMenuItem(id);


                //then
                expect(viewMenuItemComponent.errorMessage).to.equal(error);

            })
        });

    });
});