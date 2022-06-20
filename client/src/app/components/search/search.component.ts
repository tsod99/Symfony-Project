import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  books = [] as any;
  error: string = "";
  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit(): void {
    const title = this.route.snapshot.params['searchString'];
    this.bookService.getBookByTitle(title).subscribe((data) => {
    this.books = data;
    console.log(this.books);
    },(error) => {                              //Error callback
      console.log(error.error)
      this.error = error.error;

    }
    )
  }

}
