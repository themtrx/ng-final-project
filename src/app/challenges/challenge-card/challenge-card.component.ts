import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.css']
})
export class ChallengeCardComponent implements OnInit {
  
  @Input() challenge: any
  
  constructor() { }

  ngOnInit(): void {
  }

}
