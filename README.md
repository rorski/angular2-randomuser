# angular2-randomuser

angular2-randomuser is a demonstration of a basic master/detail listing application, using angular2 with a Flask based API backend.

The front end framework is Angular 2, and uses the following tools and libraries:
* [Angular 2](https://angular.io/)
* [angular-cli 1.0.0-beta.25.5](https://github.com/angular/angular-cli)
* [Font Awesome](http://fontawesome.io/)
* [Google Fonts](https://fonts.google.com/)
* [Materialize CSS](materializecss.com)
* [Faker.js](https://github.com/marak/Faker.js/)

The backend API (see the docker subdirectory and the [repository](https://github.com/rorski/angular2-randomuser-backend)) is built with:
* [Flask](http://flask.pocoo.org/)
* [marshmallow](https://marshmallow.readthedocs.io/en/latest/)
* [Flask-SQLAlchemy](http://flask-sqlalchemy.pocoo.org/2.1/)

## Installation
From the top level directory, launch the API backend:
> cd docker/
> docker-compose up
Then, install the front end.
> cd ..
> npm install
> ng serve

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
