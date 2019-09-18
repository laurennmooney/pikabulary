import { Component, OnInit } from "@angular/core";
import { PokequizService } from "../pokequiz.service";
import { trigger, transition, animate, style } from "@angular/animations";

@Component({
  selector: "app-resultspage",
  templateUrl: "./resultspage.component.html",
  styleUrls: ["./resultspage.component.css"],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [style({ opacity: 0 }), animate("0.5s")]),
      transition(":leave", [animate("0.5s", style({ opacity: 0 }))])
    ])
  ]
})
export class ResultspageComponent implements OnInit {
  results: any;
  caughtPokemon: any[];
  victoryMusic: string = "../../assets/victory-song.mp3";
  answeredIncorrectly: any[];
  showIncorrectQuestions: boolean = false;

  constructor(private pokequizService: PokequizService) {}

  ngOnInit() {
    this.pokequizService.playThemeMusic(this.victoryMusic);
    this.results = this.pokequizService.sendResultsToResultsComponent();
    this.caughtPokemon = this.results.caughtPokemon;
    this.answeredIncorrectly = this.results.incorrectlyAnswered;
  }

  toggleQuestion(index: number) {
    if (this.caughtPokemon[index].showQuestion === false) {
      this.caughtPokemon[index].showQuestion = true;
    } else {
      this.caughtPokemon[index].showQuestion = false;
    }
  }

  toggleIncorrectQuestionsList() {
    if (this.showIncorrectQuestions === false) {
      this.showIncorrectQuestions = true;
    } else {
      this.showIncorrectQuestions = false;
    }
  }

  toggleCorrectAnswer(index: number) {
    if (this.answeredIncorrectly[index].showCorrectAnswer === false) {
      this.answeredIncorrectly[index].showCorrectAnswer = true;
    } else {
      this.answeredIncorrectly[index].showCorrectAnswer = false;
    }
  }
}
