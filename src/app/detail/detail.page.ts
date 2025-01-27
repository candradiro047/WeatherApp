import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {
  weather: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (params && params['special']) {
        this.weather = JSON.parse(params['special']);
      }
    });
  }
  save() {
    localStorage.setItem('fav', JSON.stringify(this.weather));
  }
}
