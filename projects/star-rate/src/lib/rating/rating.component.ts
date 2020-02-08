import { Component, OnInit, Output, Input, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'star-rate-rating',
  templateUrl: './rating.component.html',
  styles: [
    `
      .rating {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        font-size: 22px;
        color: #a7a8a8;
      }
      .list {
        margin: 0 0 5px 0;
        padding: 0;
        list-style-type: none;
      }
      .star {
        display: inline-block;
        cursor: pointer;
      }
      .star:hover ~ .star:not(.active) {
        color: inherit;
      }
  `
  ]
})
export class RatingComponent implements OnInit {
  @Input() selctedColor: string;
  @Input() star: number;
  @Input() maxRating: number;
  @Input() showRatingCounter: boolean;
  @Output() ratingSelection: EventEmitter<number> = new EventEmitter<number>();
  stars: Array<number>;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const style = `
    .active {color :${this.selctedColor}; }
    .list:hover .star {color: ${this.selctedColor}; }
   `;
    this.createStyle(style);
    this.generateRating();
  }

  createStyle(style: string): void {
    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(style));
    this.el.nativeElement.appendChild(styleElement);
  }

  generateRating() {
    this.stars = Array.from({ length: this.maxRating }, (v, k) => k + 1);
  }

  rate(item: number) {
    this.star = (item <= this.maxRating && item >= 0) ?
      (this.star = this.star === item ? item - 1 : item) : this.star;
    this.ratingSelection.emit(this.star);
  }
}
