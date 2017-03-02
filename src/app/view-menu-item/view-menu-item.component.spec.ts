import 'zone.js';
import 'reflect-metadata';
import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import {ViewMenuItemComponent} from "./view-menu-item.component";
import {MenuItemService} from "../services/menu-item.service";
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {MenuItem} from "../models/menu-item.model";

describe('In the file menu-item-list.component.ts', () => {


    describe('the ViewMenuItemComponent\'s', () => {
        let viewMenuItemComponent: ViewMenuItemComponent;
        let activatedRoute: ActivatedRoute;
        let http: Http;
        let mockMenuItemService: MenuItemService;

        beforeEach(() => {
            viewMenuItemComponent = new ViewMenuItemComponent(activatedRoute, mockMenuItemService);
        });


        describe('constructor', () => {
            it('will instantiate the object successfully', () => {
                expect(viewMenuItemComponent).to.not.equal(null);
            })

        });

        describe('readMenuItem', () => {
            // it('will read a menu item', () => {
            //     let stub = sinon.stub(mockMenuItemService, "readMenuItem");
            //
            //
            //
            //     expect(false).to.equal(true);
            // })
        });

    });
});