import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class PokequizService {
  pokemonList: any[] = [];
  randomPokemon: any;
  selectedNumbers: number[] = [];
  duplicate: boolean;
  questionList: any;
  username: string;
  results: any;
  currentUserScore: object;
  scoreboard: any;

  constructor(private http: HttpClient, private router: Router) {}

  getPokemonList(randomId: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`);
  }

  submitUserInformation(username: string, gradeLevel: string) {
    this.username = username;
    this.questionList = this.http.get(`http://localhost:8080/${gradeLevel}`);
  }

  getQuestionList() {
    return this.questionList;
  }

  getUsername() {
    return this.username;
  }

  setResults(numberCorrect: number, pokemonCaught: any[]) {
    this.results = {
      username: this.username,
      score: numberCorrect,
      caughtPokemon: pokemonCaught
    };

    this.currentUserScore = {
      username: this.username,
      score: numberCorrect
    };
  }

  sendResultsToResultsComponent() {
    return this.results;
  }

  setUserScore() {
    return this.currentUserScore;
  }

  postToScoreboard() {
    console.log(this.currentUserScore);
    this.http
      .post("http://localhost:8080/scores", this.setUserScore())
      .subscribe(response => {
        this.scoreboard = response;
      });
  }

  getScoreboard() {
    return this.http.get("http://localhost:8080/scores");
  }
}
