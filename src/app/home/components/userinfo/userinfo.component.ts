import { Component, Input } from '@angular/core';
import { UserCurrent } from '../../../model/user';
import { UserService } from '../../../services/User.service';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent {
  @Input() userActual?:UserCurrent;

}
