import { PostsService } from '../services/post.service';
import { Component } from '@angular/core';
import { PostsModel } from '../model/posts';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { UserService } from '../services/User.service';
import { UserCurrent } from '../model/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, UserinfoComponent,HeaderComponent,PostsComponent,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userCurrent?: UserCurrent;
  publicaciones:PostsModel[] = [];
  constructor(private postService: PostsService,private userService:UserService) {}
  ngOnInit(): void {
    this.getUsuario();
    this.getPosts();
  }
  async getUsuario(){
    this.userCurrent=await this.userService.obtenerSesion();
  }
  async getPosts(){
    this.publicaciones = await this.postService.getPosts();
  }

}
