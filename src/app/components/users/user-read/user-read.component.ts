import { UserService } from '../user.service';
import { User } from '../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: User[]
  totalUser: any;
  displayedColumns = ['id', 'name', 'city','email','sald', 'action']
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.read().subscribe(users => {
      this.users = users;
      this.totalUser = users;
      window.localStorage.setItem('users',  this.totalUser?.length);

    })
  }

}
