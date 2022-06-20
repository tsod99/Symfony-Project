import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book = [] as any;
  constructor(private route: ActivatedRoute, private bookService: BookService,private routeNavigate: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.bookService.getBookById(id).subscribe((data)=>{
      console.log(data);
      this.book = data;
    })
  }

  delete(id:number) {
    if(confirm("Are you sure to delete this book ?")) {
      this.bookService.deleteBook(id).subscribe((data)=>{
        console.log(data);
        this.routeNavigate.navigate(['/books']) ;
      })
    
    }
  }

}
