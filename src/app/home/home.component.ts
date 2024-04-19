import { PostsService } from './../services/post-services.service';
import { Component } from '@angular/core';
import { PostsModel } from '../model/posts';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, UserinfoComponent,HeaderComponent,PostsComponent,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  publicaciones:PostsModel[] = [];
  constructor(private postService: PostsService) {
    
  }
  ngOnInit(): void {
    this.getPosts();
  }
  async getPosts(){
    this.publicaciones = await this.postService.getPosts();
    console.log(this.publicaciones);
  }
}
