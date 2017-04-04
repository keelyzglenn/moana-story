import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { CharactersService } from '../characters.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-distract',
  templateUrl: './distract.component.html',
  styleUrls: ['./distract.component.css'],
  providers: [CharactersService]

})
export class DistractComponent {

  constructor(private router: Router){}

}
