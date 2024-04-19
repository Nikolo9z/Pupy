import { PostsService } from './../services/post-services.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private PostsService: PostsService) { }

  async iniciarSesion() {
    const response=await this.PostsService.iniciarSesion();
  }
}
