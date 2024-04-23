import { PostsService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/User.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService:UserService) { }

  async iniciarSesion() {
    const response=await this.userService.iniciarSesion();
  }
}
