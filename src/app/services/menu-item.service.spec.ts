import 'zone.js';
import 'reflect-metadata';
import 'mocha';
import { expect } from 'chai';
import { MenuItemService } from "./menu-item.service";
import { Http } from "@angular/http";



describe('In the file menu-item.service.ts', () => {
    let server : any;

    describe('the MenuItemService\'s', () => {

        let menuItemService: MenuItemService;
        let http: Http;

        beforeEach(() => {
            menuItemService = new MenuItemService(http);

        });

        afterEach(() => {

        });

        describe('constructor', () => {

            it('will instantiate the object successfully', () => {
                expect(menuItemService).to.not.equal(null);
            })

        });

        // describe('postMenuItem', () => {
        //     it('will create a menu item', () => {
        //         let menuItem = new MenuItem();
        //         let responseMenuItem = menuItemService.postMenuItem(menuItem)
        //         expect(true).to.equal(false);
        //     })
        //
        // });
        //
        // describe('readMenuItem', () => {
        //     it('will read a menu item', () => {
        //
        //         server.respondWith("GET", "/menuitems/1", [
        //             200,
        //             {"Content-Type": "application/json"},
        //             '[{"id": "1", "name": "Pizza", "description: "Yummy", "restaurantName": "Dewey\'s" }]'
        //         ]);
        //
        //         let id = "1";
        //         let responseMenuItem = menuItemService.readMenuItem(id);
        //         expect(responseMenuItem).to.equal(false);
        //     })
        //
        // });

        // describe('readMenuItems', () => {
        //     it('will read all menu items', () => {
        //         let menuItem = new MenuItem();
        //         let responseMenuItemList = menuItemService.readMenuItems();
        //         expect(true).to.equal(false);
        //     })
        // });


    });
});