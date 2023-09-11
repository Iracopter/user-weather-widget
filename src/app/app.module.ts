import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http';
import {UserapiservicesService} from './service/userapiservices.service';
import {WeatherapiservicesService} from './service/weatherapiservices.service';
import { SavedDataComponent } from './saved-data/saved-data.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    SavedDataComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    LeafletModule
  ],
  providers: [UserapiservicesService, WeatherapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
