import { Component } from '@angular/core';
import { Auth } from '../../../security/service/auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  constructor(private auth: Auth,
    private router: Router
  ) {}

  closeSession() {
    this.auth.logout().subscribe((res:any) => {
      sessionStorage.clear()
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");
      this.router.navigate(["/login"]);
    });
  }

}
