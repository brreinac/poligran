import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public title: string;
  public imgPath: string;
  public author: string;

  constructor() { 
    this.title = "Star wars API Politécnico Grancolombiano - 2020";
    this.author = "Ing Brayan orlando reina ceron - Codigo : 1921981340";
    this.imgPath = "assets/images/ship.png";
  }

  ngOnInit() {}

}
