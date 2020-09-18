import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  teams = [
    { id: '?', name: 'Nothing', color: 'aaaaaa' },
    { id: 'KC', name: 'Kansas City Chiefs', color: 'e31837' },
    { id: 'HOU', name: 'Houston Texans', color: '03202f' },
    { id: 'SEA', name: 'Seattle Seahawks', color: '002244' },
    { id: 'GB', name: 'Green Bay Packers', color: '203721' },
    { id: 'MIN', name: 'Minnesota Vikings', color: '4f2683' },
    { id: 'DET', name: 'Detroit Lions', color: '0076b6' },
    { id: 'ARI', name: 'Arizona Cardinals', color: '97233f' },
    { id: 'MIA', name: 'Miami Dolphins', color: '008e97' }
  ];

}
