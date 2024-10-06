import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = localStorage.getItem('user');

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }

  redirectTo(url: string): void {
    this.router.navigate([url]);
  }
}
