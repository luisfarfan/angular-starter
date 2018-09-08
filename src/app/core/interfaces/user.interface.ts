export interface IResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T;
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IAddUser {
  nombre: string;
  apellidopat: string,
  apellidomat: string;
  email: string;
  fchnac: string;
  fchingreso: string;
}

export interface IAddUserResponse {
  nombre: string;
  apellidopat: string,
  apellidomat: string;
  email: string;
  fchnac: string;
  fchingreso: string;
  id: string;
  createdAt: string;
}

export interface IUpdateUser extends IAddUser {
  fchtermino: string;
}
