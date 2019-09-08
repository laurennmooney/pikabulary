import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PokequizService {
  pokemonList: any[] = [];
  randomPokemon: any;
  selectedNumbers: number[] = [];
  duplicate: boolean;

  constructor(private http: HttpClient, private router: Router) {}

  getPokemonList() {

    for (let i = 0; i <= 50; i++) {
      const randomId = Math.floor(Math.random() * 151) + 1;
        console.log(randomId);
        this.duplicate = this.checkForDuplicate(randomId);
        console.log(this.duplicate);
        if (this.duplicate === false) {
          this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`).subscribe(response => {
          this.pokemonList.push(response);
          this.selectedNumbers.push(randomId);
        });
      console.log(this.selectedNumbers);
      return this.pokemonList;
  }

  }
}

  checkForDuplicate(randomId: number) {
    for (let i = 0; i < this.selectedNumbers.length; i++) {
      if (this.selectedNumbers[i] == randomId) {
        return true;
      } else {
        return false;
      }
    }
  }

  // getScores(): Observable<any> {
  //   return this.http.get("http://localhost:8080/grade_3");
  // }
}
