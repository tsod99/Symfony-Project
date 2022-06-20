import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, } from '@angular/forms';
import { BookService } from './services/book.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   formData!: FormGroup;
   isUserLoggedIn = false;

   constructor(private authService: AuthService, private bookService: BookService, private router: Router) {}

   ngOnInit() {
      this.formData = new FormGroup({
         search: new FormControl("search")
      })
      let storeData = window.sessionStorage.getItem('auth-token');


      if( storeData != null)
         this.isUserLoggedIn = true;
      else
         this.isUserLoggedIn = false;

      console.log('User logged In :',this.isUserLoggedIn);
   }
   onClickSearch(data:any) {
      this.router.navigate([`/search/${data['search']}`])
   }
}

