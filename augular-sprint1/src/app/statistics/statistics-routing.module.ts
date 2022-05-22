import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManagementStatisticsComponent} from './management-statistics/management-statistics.component';
import {AuthGuard} from "../security/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: ManagementStatisticsComponent,
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
export class StatisticsRoutingModule {
}
