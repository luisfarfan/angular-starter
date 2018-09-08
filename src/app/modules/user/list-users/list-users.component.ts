import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Subscription } from 'rxjs';
import { IUser } from '../../../core/interfaces/user.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lf-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit, OnDestroy {
  users: Array<IUser>;

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'detail'];

  subUserService: Subscription;

  formGroup: FormGroup;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.subUserService = this.userService.getUsers()
      .subscribe(response => {
        this.users = response.data;
      });
  }

  ngOnDestroy(): void {
    if (this.subUserService) {
      this.subUserService.unsubscribe();
    }
  }

  goDetailUser(id: number): void {
    this.router.navigate([`home/detail-user/${id}/`]);
  }

  goToAddEditUser(id?: number): void {
    this.router.navigate([id ? `home/add-edit/${id}/` : 'home/add-edit']);
  }

}
