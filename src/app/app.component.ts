import { Component } from '@angular/core';
import './rxjs-operators';

import { FlaskService } from './shared/';
import { User } from './shared/user';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2-randomuser';

  constructor() {}
  ngOnInit(): void {}

}
