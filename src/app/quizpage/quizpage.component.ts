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
  pokemonList: any[] = [];
  index: number = 0;
  questionList: any;
  answeredQuestions: any[] = [];
  numberCorrect: number;
  numberWrong: number;
  caughtPokemon: any[] = [];
  throw: boolean = false;
  fade: boolean = false;
  isWrong: boolean = false;
  isCorrect: boolean = false;
  battleMusic: string = "../../assets/battle-music.mp3";
  pause: boolean;
  play: boolean;
  pokemon: any;
  question: object;
  incorrectlyAnsweredQuestions: any[] = [];

  constructor(
    private pokequizService: PokequizService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pokequizService.playThemeMusic(this.battleMusic);
    this.play = true;
    this.pokemonList = this.getRandomPokemon();
    this.pokequizService.getQuestionList().subscribe(response => {
      this.questionList = response;
      console.log(this.questionList);
    });

    this.numberWrong = 0;
    this.numberCorrect = 0;
  }

  getRandomPokemon(): any[] {
    for (let i = 0; i <= 70; i++) {
      const randomId = Math.floor(Math.random() * 151) + 1;

      this.pokequizService.getPokemonList(randomId).subscribe(response => {
        this.pokemonList.push(response);
      });
    }
    return this.pokemonList;
  }

  nextQuestion() {
    this.index++;
    this.fade = false;
    this.throw = false;
    this.isWrong = false;
    this.isCorrect = false;
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
    this.answeredQuestions.push(this.questionList[index]);

    if (form.value.choice === this.questionList[index].answer) {
      this.numberCorrect++;
      this.isCorrect = true;
      this.throwBall();

      this.pokemon = this.pokemonList[index];
      this.pokemon.question = this.questionList[index];
      this.pokemon.showQuestion = false;
      this.caughtPokemon.push(this.pokemon);
    } else {
      this.numberWrong++;
      this.incorrectlyAnsweredQuestions.push(this.questionList[index]);
      this.isWrong = true;
      this.fade = true;
    }

    setTimeout(() => {
      this.nextQuestion();
    }, 3500);

    form.reset();

    if (this.numberWrong === 3 || this.answeredQuestions.length === 70) {
      this.endQuizAndGoToResults(
        this.numberCorrect,
        this.caughtPokemon,
        this.incorrectlyAnsweredQuestions
      );
    }
  }

  endQuizAndGoToResults(
    numberCorrect: number,
    pokemonCaught: any[],
    incorrect: any[]
  ) {
    this.pokequizService.setResults(numberCorrect, pokemonCaught, incorrect);
    this.pokequizService.postToScoreboard();
    this.router.navigateByUrl("/results");
  }

  clickToPauseMusic() {
    this.pokequizService.stopMusic();
    this.pause = true;
    this.play = false;
  }

  clickToPlayMusic() {
    this.pokequizService.resumeMusic();
    this.play = true;
    this.pause = false;
  }
}
