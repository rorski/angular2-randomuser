import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListingComponent } from './user-listing/user-listing.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'users',     component: UserListingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
