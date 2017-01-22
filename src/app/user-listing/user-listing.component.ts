import { Component, OnInit } from '@angular/core';

import { FlaskService } from '../shared';
import { User } from '../shared/user';

@Component({
  selector: 'user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
  users: User[];
  errorMessage: string;

  constructor(private flaskService: FlaskService) {}

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers(): void {
    this.flaskService.getUsers().subscribe(
      users => this.users = users,
      error =>  this.errorMessage = <any>error
    );
  }

}
