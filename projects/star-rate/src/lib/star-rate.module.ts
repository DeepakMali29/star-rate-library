import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [RatingComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [RatingComponent]
})
export class StarRateModule { }
