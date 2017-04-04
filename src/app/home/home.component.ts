import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharactersService } from '../characters.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CharactersService]
})

export class HomeComponent implements OnInit{

  characters: FirebaseListObservable<any[]>;

  constructor(private router: Router, private charactersService: CharactersService){}

  ngOnInit(){
     this.characters = this.charactersService.getCharacters();
  }


  submitForm(name: string, superpower: string) {
    var newCharacter: Character = new Character(name, superpower);
    this.charactersService.addCharacter(newCharacter);
  }

  selectedCharacter = null;

  showCharacter(clickedCharacter) {
    this.selectedCharacter = clickedCharacter;
  }

  currentCharacter = null;

  addPoint(clickedCharacter){

    clickedCharacter.points = parseInt(clickedCharacter.points) + 1;

  }


}
