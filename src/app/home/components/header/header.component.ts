import { PostsService } from './../../../services/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../services/User.service';
import { UserCurrent } from '../../../model/user';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  @Input() user?:UserCurrent;
  formInput: FormControl = new FormControl('', [Validators.required, Validators.maxLength(140), Validators.minLength(1)]);
  showError = false;
  constructor(private postService: PostsService, private userService: UserService) { }

  async crearPost(){
    if(this.formInput.invalid){
      this.showError=true;
      return;
    }
      const user_id=(await this.userService.obtenerSesion()).id;
      try {
        await this.postService.createPost(this.formInput.value,user_id);
      } catch (error) {
        console.error(error);
      }
    }

}
