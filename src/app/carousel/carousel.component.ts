import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides: object[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.slides = this.dataService.getData('slides');
  }

}
