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

  constructor(private http: HttpClient, private router: Router) {}

  // getPokemon(): Observable<any> {
  //   const randomId = Math.floor(Math.random() * 151) + 1;
  //   console.log(randomId);
  //   return this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`);
  // }

  getPokemonList() {
    for (let i = 0; i <= 50; i++) {
      const randomId = Math.floor(Math.random() * 151) + 1;
      console.log(randomId);
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`).subscribe(response => {
        this.pokemonList.push(response);
      }); 
    }
    return this.pokemonList;
  }
}
