import { Component, OnInit } from "@angular/core";
import { PokequizService } from "../pokequiz.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

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
  numberWrong: number = 0;
  caughtPokemon: any[] = [];

  constructor(
    private pokequizService: PokequizService,
    private router: Router
  ) {}

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
    if (form.value.choice === this.questionList[index].answer) {
      this.numberCorrect++;
      this.caughtPokemon.push(this.pokemonList[index]);
      console.log(this.caughtPokemon);
    } else {
      this.numberWrong++;
    }
    console.log(`Number correct: ${this.numberCorrect}`);
    console.log(`Number wrong: ${this.numberWrong}`);
    this.nextQuestion();
    form.reset();
    if (this.numberWrong === 3) {
      console.log("You have three wrong");
      this.endQuizAndGoToResults(this.numberCorrect, this.caughtPokemon);
    }
  }

  endQuizAndGoToResults(numberCorrect: number, pokemonCaught: any[]) {
    this.pokequizService.setResults(numberCorrect, pokemonCaught);
    this.router.navigateByUrl("/results");
  }
}
