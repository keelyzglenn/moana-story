import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { CharactersService } from '../characters.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-stay-island',
  templateUrl: './stay-island.component.html',
  styleUrls: ['./stay-island.component.css'],
  providers: [CharactersService]
})
export class StayIslandComponent {

  constructor(private router: Router){}

}
