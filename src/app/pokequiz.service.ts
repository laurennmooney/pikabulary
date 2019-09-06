import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PokequizService {

  constructor(private http: HttpClient, private router: Router) {}

  getPokemon(): Observable<any> {
    const randomId = Math.floor(Math.random() * 151) + 1;
    console.log(randomId);
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`);
  }

}
