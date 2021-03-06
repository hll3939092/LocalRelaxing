import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pages = Pages;
  constructor() { }

  ngOnInit() {

  }

}
export class Page {
  id: string;
  name: string;
}

const Pages: Page[] = [
  { id: '11', name: '1.jpg' },
  { id: '12', name: '2.jpg' },
  { id: '13', name: 'Bombasto' },
  { id: '14', name: 'Celeritas' },
  { id: '15', name: 'Magneta' },
  { id: '16', name: 'RubberMan' },
  { id: '17', name: 'Dynama' },
  { id: '18', name: 'Dr IQ' },
  { id: '19', name: 'Magma' },
  { id: '20', name: 'Tornado' }
];


