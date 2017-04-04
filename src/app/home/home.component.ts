import { Component } from '@angular/core';
import { Character } from '../character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  characters: Character[] = [];

  submitForm(name: string, superpower: string) {
    var newCharacter: Character = new Character(name, superpower);
    this.characters.push(newCharacter);
  }
}
