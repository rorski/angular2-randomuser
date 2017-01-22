import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FlaskService } from './shared/';

@NgModule({
  declarations: [
    AppComponent,
    UserListingComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [FlaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
