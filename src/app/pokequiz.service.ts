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
  caughtPokemon: any;

  constructor(private http: HttpClient, private router: Router) {}

  getPokemonList() {
    for (let i = 0; i <= 50; i++) {
      const randomId = Math.floor(Math.random() * 151) + 1;
      console.log(randomId);
      // this.selectedNumbers.push(randomId);
      // this.duplicate = this.checkForDuplicate(randomId);
      // console.log(this.duplicate);

      // if (this.duplicate === false) {
        this.http
          .get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
          .subscribe(response => {
            this.pokemonList.push(response);
          });
        // console.log(this.selectedNumbers);
      }
      return this.pokemonList;
    }

  checkForDuplicate(randomId: number) {
    if (this.selectedNumbers.length > 0) {
      for (let i = 0; i < this.selectedNumbers.length; i++) {
        if (this.selectedNumbers[i] == randomId) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  submitUserInformation(username: string, gradeLevel: string) {
    console.log(username);
    console.log(gradeLevel);
    this.username = username;
    this.questionList = this.http.get(`http://localhost:8080/${gradeLevel}`);
  }

  getQuestionList() {
    return this.questionList;
  }
}
