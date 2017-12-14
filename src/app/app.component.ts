import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  submit(web, action) {
    alert('hi');
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=ef7eadcf10f1c729a7ea';
}
}
