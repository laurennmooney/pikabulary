import { Component, OnInit } from "@angular/core";
import { PokequizService } from "../pokequiz.service";

@Component({
  selector: "app-resultspage",
  templateUrl: "./resultspage.component.html",
  styleUrls: ["./resultspage.component.css"]
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
}
