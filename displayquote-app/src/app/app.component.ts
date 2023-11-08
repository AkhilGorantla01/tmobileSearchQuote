import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { QuotesService } from '../services/quotes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, QuoteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuotesService],
})
export class AppComponent {
  title = 'displayquote-app';
}
