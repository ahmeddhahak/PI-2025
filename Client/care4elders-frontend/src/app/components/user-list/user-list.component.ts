import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.listUsers().subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (err: any) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  delete(userId?: string) {
    if (!userId) return;
    this.userService.deleteUser(userId).subscribe({
      next: () => this.loadUsers(),
      error: (err: any) => console.error('Error deleting user:', err)
    });
  }
  
}
