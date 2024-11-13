import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Article } from "../models/article.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/articles';
  private http = inject(HttpClient);

  // Récupérer la liste des articles
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Récupérer un article par ID
  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
