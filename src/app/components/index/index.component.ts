import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (data: any) => {
        console.log(data);
      },
      complete: () => {},
    });
  }
}
