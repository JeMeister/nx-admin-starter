import { Component } from '@angular/core';
import { Message } from '@sandbox/domain';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sandbox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcome to Client Application!';
  hello$ = this.http.get<Message>('/api');

  constructor(private http: HttpClient) {}
}
