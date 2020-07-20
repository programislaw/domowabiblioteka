import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  mailResponse: string;
  wasMailSent = '';

  constructor(private httpClient: HttpClient ) { }

  ngOnInit() {}


  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.httpClient.post('https://formspree.io/xknqppnn',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            if (response['ok']) {
              this.wasMailSent = 'Success';
              this.mailResponse = 'Wiadomość została wysłana. Dziękujemy.';
            } else {
              this.wasMailSent = 'Error';
              this.mailResponse = 'Coś poszło nie tak. Proszę spróbuj później.';
            }
          },
            error => {
              this.wasMailSent = 'Error';
              this.mailResponse = 'Coś poszło nie tak. Proszę spróbuj później.';
            }
        );
      contactForm.resetForm();
    }
  }

  public closeAlert() {
    this.wasMailSent = '';
    this.mailResponse = '';
  }
}
