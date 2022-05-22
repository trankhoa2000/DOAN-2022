import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditMeetingRoomComponent} from './edit-meeting-room/edit-meeting-room.component';
import {ListMeetingRoomComponent} from './list-meeting-room/list-meeting-room.component';
import {DetailMeetingRoomComponent} from './detail-meeting-room/detail-meeting-room.component';
import {CreateMeetingRoomComponent} from './create-meeting-room/create-meeting-room.component';
import {AuthGuard} from "../security/auth.guard";


const routes: Routes = [
  {
    path: 'cap-nhat/:id',
    component: EditMeetingRoomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'danh-sach',
    component: ListMeetingRoomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'chi-tiet/:id',
    component: DetailMeetingRoomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'tao-moi',
    component: CreateMeetingRoomComponent,
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
export class MeetingRoomRoutingModule {
}
