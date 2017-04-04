import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css'],
  providers: [CharactersService]
})
export class EndGameComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
  }

}
