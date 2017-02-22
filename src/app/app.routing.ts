import { Routes, RouterModule } from '@angular/router';


import { CreateMenuItemComponent } from './create-menu-item/index';
import { ViewMenuItemComponent } from "./view-menu-item/view-menu-item.component";
import { MenuItemListComponent } from "./menu-item-list";

const appRoutes: Routes = [

    { path: 'create', component: CreateMenuItemComponent},
    { path: 'details/:id', component: ViewMenuItemComponent},
    { path: 'view-list', component: MenuItemListComponent},

    { path: '**', redirectTo: 'view-list'}
];

export const routing = RouterModule.forRoot(appRoutes);