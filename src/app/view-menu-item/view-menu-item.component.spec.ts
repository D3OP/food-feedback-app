import 'mocha';
import { expect } from 'chai';
import {ViewMenuItemComponent} from "./view-menu-item.component";
import {MenuItemService} from "../services/menu-item.service";
import {ActivatedRoute} from "@angular/router";

describe('In the file menu-item-list.component.ts', () => {


    describe('the ViewMenuItemComponent\'s', () => {
        let viewMenuItemComponent: ViewMenuItemComponent;
        let menuItemService: MenuItemService;
        let activatedRoute: ActivatedRoute;
        beforeEach(() => {
            viewMenuItemComponent = new ViewMenuItemComponent(activatedRoute, menuItemService);
        });


        describe('constructor', () => {
            it('will instantiate the object successfully', () => {
                expect(viewMenuItemComponent).to.not.equal(null);
            })

        });

    });
});