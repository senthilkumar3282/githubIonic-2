import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { GithubUsers } from '../providers/github-users';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { UserDetailsPage } from '../pages/user-details/user-details';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GithubUsers
  ]
})
export class AppModule {}
