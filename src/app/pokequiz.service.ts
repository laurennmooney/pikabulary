import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class PokequizService {
  questionList: any;
  username: string;
  gradeLevel: string;
  results: any;
  currentUserScore: object;
  scoreboard: any;

  constructor(private http: HttpClient, private router: Router) {}

  getPokemonList(randomId: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`);
  }

  submitUserInformation(username: string, gradeLevel: string) {
    this.username = username;
    this.gradeLevel = gradeLevel;
    console.log(this.gradeLevel);
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
      score: numberCorrect,
      gradeLevel: this.gradeLevel
    };
  }

  sendResultsToResultsComponent() {
    return this.results;
  }

  setUserScore() {
    console.log(this.currentUserScore);
    return this.currentUserScore;
  }

  setUserGradeLevel() {
    return this.gradeLevel;
  }

  postToScoreboard() {
    this.http
      .post("http://localhost:8080/scores", this.setUserScore())
      .subscribe(response => {
        this.scoreboard = response;
      });
  }

  getScoreboard(gradeLevel: string = "grade_3") {
    return this.http.get(`http://localhost:8080/scores/${gradeLevel}`);
  }

  getGrade3Scores() {
    return this.http.get("http://localhost:8080/scores/grade_3");
  }

  getGrade4Scores() {
    return this.http.get("http://localhost:8080/scores/grade_4");
  }

  getGrade5Scores() {
    return this.http.get("http://localhost:8080/scores/grade_5");
  }
}
