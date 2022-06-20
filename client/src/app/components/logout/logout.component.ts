import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-logout',
   templateUrl: './logout.component.html',
   styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

   constructor(private tokenStorageService : TokenStorageService, private router: Router) { }

   ngOnInit() {
      this.tokenStorageService.signOut();
      this.router.navigate(['/login']). then(() => {
         window.location.reload();
         });
      
     

   }

}