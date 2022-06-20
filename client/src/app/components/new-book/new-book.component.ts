import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  formData!: FormGroup;
  error: string = "";
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      title: new FormControl("title"),
      author: new FormControl("author"),
      description: new FormControl("description"),
      review: new FormControl("review")
    });
  }
  onClickSubmit(f: any) { 
      var bodyFormData = new FormData();
      bodyFormData.append('title', this.formData.value['title']);
      bodyFormData.append('author', this.formData.value['author']);
      bodyFormData.append('description', this.formData.value['description']);
      bodyFormData.append('review', this.formData.value['review']);
      const body = { title:  bodyFormData.get("title"),
                    author: bodyFormData.get("author"),
                    description: bodyFormData.get("description"),
                    review: bodyFormData.get("review")
                  };
      console.log(body)  ;          
      this.bookService.postBook(body).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/books'])
      },(error) => {                              //Error callback
        this.error = error.error.message;
  
      }
      );
    }

}
