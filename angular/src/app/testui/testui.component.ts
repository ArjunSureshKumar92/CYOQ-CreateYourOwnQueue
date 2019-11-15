import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testui',
  templateUrl: './testui.component.html',
  styleUrls: ['./testui.component.css']
})
export class TestuiComponent implements OnInit {

  books: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/testui').subscribe(data => {
      this.books = data;
    });
  }

}
