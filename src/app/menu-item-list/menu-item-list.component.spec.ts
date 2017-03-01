import 'zone.js';
import 'reflect-metadata';
import 'mocha';
import { expect } from 'chai';
import { MenuItemListComponent } from "./menu-item-list.component";
import { MenuItemService } from "../services/menu-item.service";


describe('In the file menu-item-list.component.ts', () => {
    describe('the MenuItemListComponent\'s', () => {
        let menuItemListComponent: MenuItemListComponent;
        let menuItemService: MenuItemService;
        beforeEach(() => {
            menuItemListComponent = new MenuItemListComponent(menuItemService);
        });

        describe('constructor', () => {
            it('will instantiate the object successfully', () => {
                expect(menuItemListComponent).to.not.equal(null);
            })

        });

    });
});