import { Injectable } from '@angular/core';
// instacia de protocolo http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // instacia de HttpClient	
  constructor(private http:HttpClient) { }

  // metodo de consulta de todos los libros 
  getBooks(){
  	return this.http.get('http://localhost:3000/books')
  
  }
}
