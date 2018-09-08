import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'lf-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  formGroup: FormGroup;
  id: number;
  add: boolean;
  detail: IUser;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.createForm();
    this.setData();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidopat: ['', Validators.required],
      apellidomat: ['', Validators.required],
      email: ['', Validators.required],
      fchnac: ['', Validators.required],
      fchingreso: [''],
      fchtermino: [''],
    });
  }

  setData(): void {
    if (this.id) {
      this.userService.getDetailUser(this.id)
        .subscribe(response => {
          this.detail = response.data;
          this.formGroup.controls['nombre'].setValue(this.detail.first_name);
          this.formGroup.controls['apellidopat'].setValue(this.detail.last_name);
        });
    }
  }

  saveForm(): void {
    if (this.formGroup.valid) {
      const data = {...this.formGroup.getRawValue()};
      if (!this.id) {
        delete data['fchtermino'];
        this.userService.addUser(data)
          .subscribe(response => {
            this.saveDone();
          });
      } else {
        delete data['fchingreso'];
        this.userService.updateUser(this.id, data)
          .subscribe(response => {
            this.saveDone();
          });
      }
    } else {
      alert('POR FAVOR COMPLETE LOS DATOS!');
    }
  }

  saveDone(): void {
    this.formGroup.reset();
    this.router.navigate(['/home']);
  }
}
