import { Injectable } from '@angular/core';
import { Fixture } from './types/fixture';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  show : boolean = false;
  fixture : Fixture = null;

  toggle() : void {
    this.show = !this.show;
  }

  editFixture(aFixture : Fixture) : void {
    this.fixture = aFixture;
    this.toggle();
  }

  updateFixture(awayTeam : string, homeTeam : string) : void {
    this.fixture.awayTeam = awayTeam;
    this.fixture.homeTeam = homeTeam;
  }

  saveFixture() : void {
    this.toggle();
  }

}
