import { Component, Input } from '@angular/core';
import { PostsModel } from '../../../model/posts';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  @Input() publicaciones: PostsModel[] = [];

}
