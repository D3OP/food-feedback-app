import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuItemService } from './services/menu-item.service';
import { CreateMenuItemComponent } from "./create-menu-item/create-menu-item.component";
import { MenuItemListComponent } from "./menu-item-list/menu-item-list.component";
import { ViewMenuItemComponent } from "./view-menu-item/view-menu-item.component";

import {routing} from "./app.routing";

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      CreateMenuItemComponent,
      MenuItemListComponent,
      ViewMenuItemComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  ],
  providers: [
      MenuItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
