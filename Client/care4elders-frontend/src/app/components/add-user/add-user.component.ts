// src/app/components/add-user/add-user.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  standalone: true,
  imports: [FormsModule]  // Add FormsModule here
})
export class AddUserComponent {
  newUser = {
    username: '',
    email: '',
    password: ''
  };

  addUser() {
    // Call your service to add the user here.
    console.log('Adding user:', this.newUser);
  }
}
