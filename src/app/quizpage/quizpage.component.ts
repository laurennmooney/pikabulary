import { Component, OnInit } from "@angular/core";
import { PokequizService } from "../pokequiz.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {
  trigger,
  animate,
  style,
  transition,
  keyframes
} from "@angular/animations";

@Component({
  selector: "quizpage",
  templateUrl: "./quizpage.component.html",
  styleUrls: ["./quizpage.component.css"],
  animations: [
    trigger("throwBall", [
      transition(":enter", [
        animate(
          "0.75s",
          keyframes([
            style({
              transform:
                "rotate(150deg) translateX(-400%) translateY(-500%) scale(4)",
              offset: 0
            }),
            style({
              transform:
                "rotate(120deg) translateX(-280%) translateY(-400%) scale(3.25)",
              offset: 0.2
            }),
            style({
              transform:
                "rotate(90deg) translateX(-160%) translateY(-300%)scale(2.75)",
              offset: 0.4
            }),
            style({
              transform:
                "rotate(60deg) translateX(-90%) translateY(-200%) scale(2)",
              offset: 0.6
            }),
            style({
              transform:
                "rotate(30deg) translateX(-20%) translateY(-150%)scale(1.50)",
              offset: 0.8
            }),
            style({
              transform:
                "rotate(10deg) translateX(-10%) translateY(-110%) scale(1)",
              offset: 0.9
            }),
            style({
              transform:
                "rotate(0deg) translateX(35%) translateY(-75%)scale(1)",
              offset: 1
            })
          ])
        )
      ])
    ]),

    trigger("fadeOut", [
      transition(":leave", [
        animate(
          "0.1s",
          keyframes([
            style({
              opacity: 0.5,
              transform: "scale(1) translateX(-70%)",
              offset: 0
            }),
            style({
              opacity: 0.25,
              transform: "scale(0.55) translateX(-90%)",
              offset: 0.5
            }),
            style({
              opacity: 0,
              transform: "scale(0) translateX(-210%)",
              offset: 1
            })
          ])
        )
      ])
    ])
  ]
})
export class QuizpageComponent implements OnInit {
  pokemon: any;
  pokemonList: any[] = [];
  index: number = 0;
  questionList: any;
  numberCorrect: number = 0;
  numberWrong: number = 0;
  caughtPokemon: any[] = [];
  throw: boolean = false;
  fade: boolean = false;

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
    this.fade = false;
    this.throw = false;
  }

  throwBall() {
    this.throw = true;

    setTimeout(() => {
      if (this.throw === true) {
        this.fade = true;
      }
    }, 1000);
  }

  checkAnswer(form: NgForm, index: number) {
    if (form.value.choice === this.questionList[index].answer) {
      this.numberCorrect++;
      this.throwBall();
      this.caughtPokemon.push(this.pokemonList[index]);
      console.log(this.caughtPokemon);
    } else {
      this.numberWrong++;
    }
    setTimeout(() => {
      this.nextQuestion();
    }, 3000);
    form.reset();

    if (this.numberWrong === 3) {
      console.log("You have three wrong");
      this.endQuizAndGoToResults(this.numberCorrect, this.caughtPokemon);
    }
  }

  endQuizAndGoToResults(numberCorrect: number, pokemonCaught: any[]) {
    this.pokequizService.setResults(numberCorrect, pokemonCaught);
    this.pokequizService.postToScoreboard();
    this.router.navigateByUrl("/results");
  }
}
