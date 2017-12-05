import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pages = Pages;

  results: string;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.http.get<ItemResponse>('http://localhost:8080/Comic/pic').subscribe(data => {
    this.results = data.name;
  });
  }

}
export class Page {
  id: string;
  name: string;
}

interface ItemResponse {
  name: string;
  work: string;
}

const Pages: Page[] = [
  { id: '11', name: 'http://45.32.63.226:921/test/1.jpg' },
  { id: '12', name: 'http://45.32.63.226:921/test/2.jpg' },
  { id: '13', name: 'http://45.32.63.226:921/test/3.jpg'  },
  { id: '14', name: 'http://45.32.63.226:921/test/4.jpg'  },
  { id: '15', name: 'http://45.32.63.226:921/test/5.jpg' },
  { id: '16', name: 'http://45.32.63.226:921/test/6.jpg' },
  { id: '17', name: 'http://45.32.63.226:921/test/7.jpg' },
  { id: '18', name: 'http://45.32.63.226:921/test/8.jpg' },
  { id: '19', name: 'http://45.32.63.226:921/test/1.jpg' },
  { id: '20', name: 'http://45.32.63.226:921/test/2.jpg' },
  { id: '11', name: 'http://45.32.63.226:921/test/3.jpg' },
  { id: '12', name: './assets/2.jpg' },
  { id: '13', name: './assets/3.jpg'  },
  { id: '14', name: './assets/4.jpg'  },
  { id: '15', name: 'Magneta' },
  { id: '16', name: 'RubberMan' },
  { id: '17', name: 'Dynama' },
  { id: '18', name: 'Dr IQ' },
  { id: '19', name: 'Magma' },
  { id: '20', name: 'Tornado' }
];


