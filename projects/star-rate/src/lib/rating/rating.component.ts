import { Component, OnInit, Output, Input, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'star-rate-rating',
  // templateUrl: './rating.component.html',
  template: `
  <div class="rating">
    <ul class="list">
      <li
        id="starId"
        class="star"
        *ngFor="let item of stars"
        [ngClass]="{'active': item <= star}"
        (click)="rate(item)">
        <i class="fa" [ngClass]="item <= star ? 'fa-star' : 'fa-star-o'" aria-hidden="true"></i>
      </li>
    </ul>
    <span *ngIf="showRatingCounter">{{ star }} of {{ maxRating }}</span>
  </div>
  `,
  styleUrls: ['./rating.component.css']
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
