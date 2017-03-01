import 'zone.js';
import 'reflect-metadata';
import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';
import { MenuItemService } from "./menu-item.service";
import { Http } from "@angular/http";
import { MenuItem } from "../models/menu-item.model";


describe('In the file menu-item.service.ts', () => {
    let server : any;

    describe('the MenuItemService\'s', () => {

        let menuItemService: MenuItemService;
        let http: Http;

        beforeEach(() => {
            server = sinon.fakeServer.create();
            server.autoRespond = true;
            menuItemService = new MenuItemService(http);

        });

        afterEach(() => {
            server.restore();
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
        //         let id = "1";
        //         let responseMenuItem = menuItemService.readMenuItem(id);
        //         expect(true).to.equal(false);
        //     })
        //
        // });
        //
        // describe('readMenuItems', () => {
        //     it('will read all menu items', () => {
        //         let menuItem = new MenuItem();
        //         let responseMenuItemList = menuItemService.readMenuItems();
        //         expect(true).to.equal(false);
        //     })
        // });


    });
});