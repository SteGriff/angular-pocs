import { Component, Input, OnInit } from '@angular/core';
import { Fixture } from '../types/fixture';
import { DialogService } from '../dialog.service';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'fixture-container',
  templateUrl: './fixture-container.component.html',
  styleUrls: ['./fixture-container.component.css']
})
export class FixtureContainerComponent implements OnInit {
  @Input() fixture: Fixture;

  constructor(public dialogService: DialogService, private teamsService: TeamsService) { }

  ngOnInit(): void {
  }

  background(): string {
    const awayColor = this.teamsService.teams.filter(t => t.id === this.fixture.awayTeam)[0].color;
    const homeColor = this.teamsService.teams.filter(t => t.id === this.fixture.homeTeam)[0].color;
    const rule = `linear-gradient(135deg, #${awayColor}, #${awayColor} 49%, #${homeColor} 51%, #${homeColor})`;
    return rule;
  }

}
