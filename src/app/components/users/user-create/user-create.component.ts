import { User } from '../user.model';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercreate',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    name: '',
    city: '',
    email: '',
    sald: null
  }

  constructor(private userservice: UserService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createUser(): void {
    this.userservice.create(this.user).subscribe(() => {
      this.userservice.showMessage('usuario criado!')
      this.router.navigate(['/users'])
    })

  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
