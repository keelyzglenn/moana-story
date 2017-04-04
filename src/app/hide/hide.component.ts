import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { CharactersService } from '../characters.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-hide',
  templateUrl: './hide.component.html',
  styleUrls: ['./hide.component.css'],
  providers: [CharactersService]
})
export class HideComponent {

  constructor(private router: Router){}


}
