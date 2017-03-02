import 'zone.js';
import 'reflect-metadata';
import 'mocha';
import { expect } from 'chai';
import {CreateMenuItemComponent} from "./create-menu-item.component";
import {MenuItemService} from "../services/menu-item.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

describe('In the file create-menu-item.component.ts', () => {


    describe('the CreateMenuItemComponent\'s', () => {
        let createMenuItemComponent: CreateMenuItemComponent;
        let menuItemService: MenuItemService;
        let router: Router;


        beforeEach(() => {
            createMenuItemComponent = new CreateMenuItemComponent(router, menuItemService);
        })


        describe('constructor', () => {
            it('will instantiate the object successfully', () => {
                expect(createMenuItemComponent).to.not.equal(null);
            })

        });

        // describe('submitForm', () => {
        //     it('will submit a form'), () => {
        //         let form: NgForm;
        //         createMenuItemComponent.submitForm(form);
        //         expect(true).to.equal(false);
        //
        //     }
        // })

    });
});