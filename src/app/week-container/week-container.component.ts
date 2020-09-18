import { Component, Input, OnInit } from '@angular/core';
import { Week } from '../types/week';
import { Fixture } from '../types/fixture';

@Component({
  selector: 'week-container',
  templateUrl: './week-container.component.html',
  styleUrls: ['./week-container.component.css']
})
export class WeekContainerComponent implements OnInit {
  @Input() week: Week;

  constructor() { }

  ngOnInit(): void {
  }

  newFixture(): Fixture {
    return { awayTeam: "?", homeTeam: "?" }
  }
  
  addFixture() : void {
    this.week.fixtures.push(this.newFixture());
  }
}
