import { Component, OnInit,HostListener,ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { 
  trigger,
  state,
  style,
  animate,
  transition, } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;
  constructor() { }

  ngOnInit(): void {
  }
  slideConfig = { slidesToShow: 1, slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500
   };

   slides = [
    {img: "/assets/images/slick4.jpg"},
    {img: "/assets/images/slick1.jpg"},
    {img: "/assets/images/slick2.jpg"},
    {img: "/assets/images/slick3.jpg"},
   
  ];
  changeState(){

  }

next() {
  this.slickModal.slickNext();
  this.changeState()
}

prev() {
  this.slickModal.slickPrev();
}

   
}
