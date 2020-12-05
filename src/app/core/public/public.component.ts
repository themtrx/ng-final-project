import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  boredImg: string;

  constructor() {
    this.boredImg = '../../../assets/img/day_dreaming_.png'
   }

  ngOnInit(): void {
  }

}
