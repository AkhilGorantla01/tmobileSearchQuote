import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../models/quote.class';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css',
})
export class QuoteComponent implements OnInit {
  public quote = new Quote(' ');
  quoteResult: any;
  constructor(public quoteService: QuotesService, private fb: FormBuilder) {}
  myForm: FormGroup = this.fb.group({
    quote: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  onSubmit() {
    if (this.myForm.valid) {
      const quote = this.myForm.value.quote;

      this.quoteService.getRandomQuote(quote).subscribe((response) => {
        // Handle the response from the API here, e.g., display it on the page.

        this.quoteResult = response;
        console.log(this.quoteResult);
      });
    }
  }
}
