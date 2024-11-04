import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private apiUrl = 'http://localhost:8080/books-api';

  constructor(private http: HttpClient) {}

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/authors/${id}`);
  }
}
