import { Component, OnInit } from '@angular/core';
import { PokequizService } from '../pokequiz.service';

@Component({
  selector: 'quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit {
  pokemon: any;
  pokemonList: any[] = [];
  index: number = 0;

  constructor(private pokequizService: PokequizService) { }

  ngOnInit() {
    this.pokemonList = this.pokequizService.getPokemonList();
    console.log(this.pokemonList);
  }

  nextQuestion() {
    this.index++;
  }
}
