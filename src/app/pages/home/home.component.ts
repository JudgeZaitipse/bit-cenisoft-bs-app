import { Component, OnInit } from '@angular/core';
// instacia de booksService
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books = []

  constructor(private booksService: BooksService) { }
  // metodo de instacia del metod de app module books 
  ngOnInit(): void {
    this.booksService.getBooks()
    .subscribe(
      (books: any) => {
        this.books = books
        console.log('books',books)
      },
      (error) => {
        console.log('Errror in load request',error)
      })
  }

}
