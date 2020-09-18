import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from '../dialog.service';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'fixture-dialog',
  templateUrl: './fixture-dialog.component.html',
  styleUrls: ['./fixture-dialog.component.css']
})
export class FixtureDialogComponent implements OnInit {

  constructor(public dialogService: DialogService, private teamsService : TeamsService) { }

  ngOnInit(): void {
  }

}
