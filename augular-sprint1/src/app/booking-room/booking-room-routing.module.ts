import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ScreenBookingRoomComponent} from './screen-booking-room/screen-booking-room.component';

import {SearchEmptyRoomComponent} from './search-empty-room/search-empty-room.component';
import {BookMeetingRoomComponent} from './book-meeting-room/book-meeting-room.component';
import {BookingAgreeComponent} from './booking-agree/booking-agree.component';
import {BookingNotAgreeComponent} from './booking-not-agree/booking-not-agree.component';
import {AuthGuard} from "../security/auth.guard";

const routes: Routes = [
  {
    path: 'man-hinh',
    component: ScreenBookingRoomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'searchEmpty',
    component: SearchEmptyRoomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'create',
    component: BookMeetingRoomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'searchEmpty/:meetingRoom/:meetingType/:startDateVariable/:endDateVariable/:startHourVariable/:endHourVariable',
    component: SearchEmptyRoomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'searchEmpty/:meetingRoom/:meetingType/:startHourVariable/:endHourVariable',
    component: SearchEmptyRoomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'create/:meetingRoom/:meetingType/:startDateVariable/:endDateVariable/:startHourVariable/:endHourVariable',
    component: BookMeetingRoomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {path: 'create/:meetingRoom/:meetingType/:startHourVariable/:endHourVariable', component: BookMeetingRoomComponent},
  {
    path: 'agree/:userId/:startDateVariable/:endDateVariable/:startHourVariable/:endHourVariable/:meetingRoomName',
    component: BookingAgreeComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'notagree/:userId/:startDateVariable/:endDateVariable/:startHourVariable/:endHourVariable/:meetingRoomName',
    component: BookingNotAgreeComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'create/:meetingRoom/:meetingType/:startDateVariable/:endDateVariable/:startHourVariable/:endHourVariable/:subject',
    component: BookMeetingRoomComponent,
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
export class BookingRoomRoutingModule {
}
