import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  //For Search API
  private apiUrl = 'https://api.quotable.io/search/quotes';
  //For Random API
  //private apiUrl = 'https://api.quotable.io/quotes/random?limit=3';
  constructor(public http: HttpClient) {}

  public getRandomQuote(quote: string) {
    console.log(quote, 'quote');
    let queryParams = new HttpParams();
    let params:string = quote;
    queryParams = queryParams.append("query",params);
    return this.http.get(this.apiUrl,{params:queryParams});
    //return this.http.get(this.apiUrl);
  }
}
