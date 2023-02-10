import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tarjeta3DComponent } from './components/tarjeta3-d/tarjeta3-d.component';
import { DraggComponent } from './components/dragg/dragg.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { MapComponent } from './components/map/map.component';
import { LiquidMenuComponent } from './components/liquid-menu/liquid-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    Tarjeta3DComponent,
    DraggComponent,
    MapComponent,
    LiquidMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDraggableModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
