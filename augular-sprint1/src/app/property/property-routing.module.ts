import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListPropertyComponent} from './list-property/list-property.component';
import {EditPropertyComponent} from './edit-property/edit-property.component';
import {CreatePropertyComponent} from './create-property/create-property.component';
import {DetailPropertyComponent} from './detail-property/detail-property.component';
import {AuthGuard} from "../security/auth.guard";


const routes: Routes = [
  {
    path: 'danh-sach',
    component: ListPropertyComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'chinh-sua/:id',
    component: EditPropertyComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'tao-moi',
    component: CreatePropertyComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'chi-tiet/:id',
    component: DetailPropertyComponent,
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
export class PropertyRoutingModule {
}
