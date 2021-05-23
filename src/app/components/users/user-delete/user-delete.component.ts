import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-delete",
  templateUrl: "./user-delete.component.html",
  styleUrls: ["./user-delete.component.css"],
})
export class UserDeleteComponent implements OnInit {
  user: User;

  constructor(
    private userservice:UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userservice.readById(id).subscribe((user) => {
      this.user = user;
    });
  }

  deleteUser(): void {
    this.userservice.delete(this.user.id).subscribe(() => {
      this.userservice.showMessage("Usuario excluido com sucesso!");
      this.router.navigate(["/users"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/users"]);
  }
}
