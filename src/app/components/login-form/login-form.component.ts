import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  
  // Array cu utilizatori, roluri si parole
  users = [
    { username: 'user1', password: 'user1', role: 'User' },
    { username: 'manager1', password: 'manager1', role: 'Manager' },
    { username: 'admin1', password: 'admin1', role: 'Admin' },
  ];

  constructor(private router: Router) {}

  login() {
    const foundUser = this.users.find(user => 
      user.username === this.username && user.password === this.password
    );

    if (foundUser) {
      localStorage.setItem('user', this.username);
      localStorage.setItem('userRole', foundUser.role);
      this.router.navigate(['/home']);
    } else {
      alert('Credențiale invalide!');
    }
  }
}
