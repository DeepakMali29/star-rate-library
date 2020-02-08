# RatingNG

This project is to understand how to create npm ready angular component libraries to use in an angular application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Some important for publish npm package.

Finally, lets see how to publish npm package

  1. Add npm user by running below command  
  ```npm adduser```
 > Note: 
 > 1. If you are not signed up above command will sign up you as npm user.
 > 2. Type ```npm whoami``` from a terminal to see if you are already logged in (technically, this also means that your credentials have been stored locally).
 2. Login into npm by running  
 ```npm login```
 3. Go to the packaged output in ```dist/star-rate```

 ```cmd
 > cd dist/star-rate
 > dist/star-rate> npm publish
 ```
