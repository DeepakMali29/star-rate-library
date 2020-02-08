# ng-star-rate

For now, one component is added in this library
```html
<star-rate-rating 
    [selctedColor]="selectColor"
    [star]="item"
    [maxRating]="maxRating"
    [showRatingCounter]="showRatingCounter"
    (ratingSelection)="selectedRating($event)">
</star-rate-rating>
```

# How to use?

* Include our ```StarRateModule``` module in ```app.module.ts```
```javascript
import { StarRateModule } from 'star-rate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StarRateModule //<-- add the module in imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* Add the component ```<star-rate-rating>``` where rating part is expected in your application

---

## To briefly explain what is role of input and output in the components as below

1. ```[star]``` - pass the rating number to the app i.e. - If rating has to be pre-selected. **star** - hold the default value of rating. | __type: *number*__
2. ```[maxRating]``` - pass the maximum rating stars needs to be rendered by that component. | __type: *number*__
3. ```[showRatingCounter]``` - this boolean value is to decide whether to show the rating value on the screen like 2 out of 5 | __type: *boolean*__
4. ```(ratingSelection)``` - This callback will be triggered when user selects the rating in the component.

# Sample implementation

**```app.module.ts```**

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarRateModule } from 'star-rate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StarRateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

**```app.component.html```**

```html
<div class="center-align">
  <h1>
    Let's rate it!
  </h1>
    <star-rate-rating
    [selctedColor]="selectColor"
    [star]="item"
    [maxRating]="maxRating"
    [showRatingCounter]="showRatingCounter"
    (ratingSelection)="selectedRating($event)"></star-rate-rating>
  <h1 *ngIf="myRating">
    Rated to {{myRating}}
  </h1>
</div>
```

**```app.component.ts```**

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  selectColor = 'green';
  item = 0;
  maxRating = 5;
  showRatingCounter = true;
  myRating: number;

  selectedRating(rate: number) {
    console.log('your rating is--', rate);
    this.myRating = rate;
  }
}

```

# Screenshots
* Initial rendering  

    ![Initial rendered image](https://github.com/DeepakMali29/star-rate-library/blob/master/projects/home/src/assets/initial_image.PNG)

* While user hovering on rating component  

    ![Hovering on rating component image](https://github.com/DeepakMali29/star-rate-library/blob/master/projects/home/src/assets/hovering_image.PNG)

* Once, user rate  

    ![Rating component image](https://github.com/DeepakMali29/star-rate-library/blob/master/projects/home/src/assets/rate_selected_image.PNG)

> Thank you.