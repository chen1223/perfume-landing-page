import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Determine the current state of the hamburger menu
  isActive = false;
  productImgs = ['../../assets/img/product1.jpg', '../../assets/img/product2.jpg', '../../assets/img/product3.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isActive = !this.isActive;
  }
}
