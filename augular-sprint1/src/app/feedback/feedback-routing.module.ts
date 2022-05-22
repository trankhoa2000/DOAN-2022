import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateFeedbackComponent} from './create-feedback/create-feedback.component';
import {ListFeedbackComponent} from './list-feedback/list-feedback.component';
import {HandleFeedbackComponent} from './handle-feedback/handle-feedback.component';
import {CreateFeedbackTechnicalComponent} from './create-feedback-technical/create-feedback-technical.component';
import {ListUserFeedbackComponent} from './list-user-feedback/list-user-feedback.component';
import {DetailFeedbackComponent} from './detail-feedback/detail-feedback.component';
import {AuthGuard} from "../security/auth.guard";

const routes: Routes = [
  {
    path: 'them-moi-phan-hoi-phong-hop',
    component: CreateFeedbackComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'danh-sach-phan-hoi',
    component: ListFeedbackComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'xu-ly-phan-hoi/:id',
    component: HandleFeedbackComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'chi-tiet',
    component: DetailFeedbackComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'them-moi-phan-hoi-loi-ki-thuat',
    component: CreateFeedbackTechnicalComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'danh-sach-phan-hoi-nguoi-dung',
    component: ListUserFeedbackComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule {
}
