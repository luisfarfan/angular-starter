import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddUser, IAddUserResponse, IResponse, IUpdateUser, IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { UserEndpoint } from '../endpoints/user.endpoint';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IResponse<Array<IUser>>> {
    return this.http.get<IResponse<Array<IUser>>>(UserEndpoint.restUser);
  }

  getDetailUser(id: number): Observable<{ data: IUser }> {
    const url = `${UserEndpoint.restUser}${id}`;
    return this.http.get<{ data: IUser }>(url);
  }

  addUser(user: IAddUser): Observable<IAddUserResponse> {
    return this.http.post<IAddUserResponse>(UserEndpoint.restUser, user);
  }

  updateUser(id: number, user: IUpdateUser): Observable<IAddUserResponse> {
    const url = `${UserEndpoint.restUser}${id}`;
    return this.http.put<IAddUserResponse>(url, user);
  }
}
