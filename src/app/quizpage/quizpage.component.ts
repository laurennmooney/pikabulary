import { Component, OnInit } from "@angular/core";
import { PokequizService } from "../pokequiz.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: "quizpage",
  templateUrl: "./quizpage.component.html",
  styleUrls: ["./quizpage.component.css"]
})
export class QuizpageComponent implements OnInit {
  pokemon: any;
  pokemonList: any[] = [];
  index: number = 0;
  questionList: any;
  numberCorrect: number = 0;
  numberWrong: number = 3;

  constructor(private pokequizService: PokequizService) {}

  ngOnInit() {
    this.pokemonList = this.pokequizService.getPokemonList();
    console.log(this.pokemonList);
    this.pokequizService.getQuestionList().subscribe(response => {
      this.questionList = response;
      console.log(this.questionList);
    });
  }

  nextQuestion() {
    this.index++;
  }

  checkAnswer(form: NgForm, index: number) {
    console.log(form);
    console.log(form.value.choice);
    console.log(index);
  }

}
