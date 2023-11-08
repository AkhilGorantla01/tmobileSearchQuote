import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private apiUrl = 'https://api.quotable.io/quotes/random?limit=3';
  constructor(public http: HttpClient) {}

  public getRandomQuote(quote: string) {
    console.log(quote, 'quote');
    return this.http.get(this.apiUrl);
  }
}
