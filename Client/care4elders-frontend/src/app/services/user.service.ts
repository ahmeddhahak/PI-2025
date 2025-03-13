import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: string;
  username: string;
  email: string;
  password?: string;
  roles?: string[];
  twoFaSecret?: string;
  twoFaEnabled?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('admin:admin123') 
    })
  };

  constructor(private http: HttpClient) { }

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/list`, this.httpOptions);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/add`, user, this.httpOptions);
  }

  deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${userId}`, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user, this.httpOptions);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${userId}`, this.httpOptions);
  }
}
