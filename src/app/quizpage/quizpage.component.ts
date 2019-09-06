import { Component, OnInit } from '@angular/core';
import { PokequizService } from '../pokequiz.service';

@Component({
  selector: 'quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit {
  pokemon: any;

  constructor(private pokequizService: PokequizService) { }

  ngOnInit() {
    this.pokequizService.getPokemon().subscribe(response => {
      console.log(response);
    })
    console.log(this.pokemon);
  }

}
