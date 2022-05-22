import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateUserComponent} from './create-user/create-user.component';
import {ListUserComponent} from './list-user/list-user.component';
import {ProfileComponent} from './profile/profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {BookingHistoryComponent} from './booking-history/booking-history.component';
import {AuthGuard} from '../security/auth.guard';

const routes: Routes = [
  {
    path: 'tao-moi',
    component: CreateUserComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'thong-tin/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'danh-sach',
    component: ListUserComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'cap-nhat/:id',
    component: EditUserComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'lich-su-dat-phong/:id',
    component: BookingHistoryComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'quan-ly-dat-phong',
    component: BookingHistoryComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'doi-mat-khau/:id',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
