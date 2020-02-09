import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// library
import { StarRateModule } from 'dist/star-rate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    StarRateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
