import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import { IUser } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'lf-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit, OnDestroy {
  subRoute: Subscription;
  subUserService: Subscription;
  id: number;
  detailUser: IUser;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDetailUser();
  }

  ngOnDestroy(): void {
    if (this.subUserService) {
      this.subUserService.unsubscribe();
    }
    if (this.subRoute) {
      this.subRoute.unsubscribe();
    }
  }

  getDetailUser(): void {
    this.subUserService = this.userService.getDetailUser(this.id)
      .subscribe(response => {
        this.detailUser = response.data;
      });
  }

  goToListUsers(): void {
    this.router.navigate(['/home']);
  }
}
