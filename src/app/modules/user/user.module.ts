import { NgModule } from '@angular/core';
import { ListUsersComponent } from './list-users/list-users.component';
import { RouterModule, Routes } from '@angular/router';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatTableModule, MatFormFieldModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent
  },
  {
    path: 'detail-user/:id',
    component: DetailUserComponent
  },
  {
    path: 'add-edit',
    component: AddEditUserComponent
  },
  {
    path: 'add-edit/:id',
    component: AddEditUserComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ListUsersComponent, AddEditUserComponent, DetailUserComponent],
  exports: [RouterModule]
})
export class UserModule {
}
