import { Component, Input } from '@angular/core';
import { PostsModel } from '../../../model/posts';
import { CommonModule} from '@angular/common';
import { PostsService } from '../../../services/post.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  publicaciones: PostsModel[] = [];
  constructor(private postsService:PostsService) { }
  async ngOnInit() {
    this.publicaciones=(await this.postsService.mostrarPosts()).reverse();
  }

}
