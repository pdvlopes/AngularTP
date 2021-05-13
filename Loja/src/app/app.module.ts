import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MembrosComponent } from './membros/membros.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLateralComponent } from './menu/menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    MembrosComponent,
    MenuComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
