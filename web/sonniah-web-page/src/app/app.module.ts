import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from './material-module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsComponent } from './shows/shows.component';

@NgModule({
  declarations: [
    HomeComponent,
    ShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [HomeComponent,ShowsComponent]
})
export class AppModule { }
