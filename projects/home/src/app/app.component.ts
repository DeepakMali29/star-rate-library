import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rating';
  selectColor = 'green';
  item = 0;
  maxRating = 5;
  showRatingCounter = true;
  myRating: number;

  constructor() { }

  selectedRating(rate: number) {
    this.myRating = rate;
  }

}
