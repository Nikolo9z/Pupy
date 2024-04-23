import { PostsService } from './../../../services/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../services/User.service';
import { UserCurrent } from '../../../model/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  @Input() user?:UserCurrent;
 constructor(private postService:PostsService,private userService:UserService) { }

 async crearPost(contenido:string){
    const user_id=(await this.userService.obtenerSesion()).id;
    try {
      await this.postService.createPost(contenido,user_id);
    } catch (error) {
      console.error(error);
    }
  }
}
