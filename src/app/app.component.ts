import { Component, OnInit } from '@angular/core';
import { Week } from './types/week';
import { Fixture } from './types/fixture';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
    this.addWeek();
  }

  title = 'my-app';
  message = '';
  weeks = [];

  newWeek(): Week {
    const weekNum = this.weeks.length + 1;
    return { num: weekNum, fixtures: [this.newFixture()] };
  }

  newFixture(): Fixture {
    return { awayTeam: "?", homeTeam: "?" }
  }

  addWeek(): void {
    this.weeks.push(this.newWeek());
  }
}
