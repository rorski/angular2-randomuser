import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FlaskService } from '../shared';
import { User } from '../shared/user';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  errorMessage: string;

  constructor(
    private flaskService: FlaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.route.params.switchMap(
      (params: Params) => this.flaskService.getUser(+params['id']))
      .subscribe(
        user => this.user = user,
        error =>  this.errorMessage = <any>error
      );
  }

}
