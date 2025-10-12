import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../security/service/auth/local-storage';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object, private localStorageService: LocalStorageService) { }
    
    canActivate(): boolean {
        if (this.localStorageService.getItem('isLoggedIn') == 'true') {
            return true;
        }else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
}