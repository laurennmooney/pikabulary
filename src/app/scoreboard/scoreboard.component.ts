import { Component, OnInit } from '@angular/core';
import { PokequizService } from '../pokequiz.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  scoreboard: any;

  constructor(private pokequizService: PokequizService) {}

  ngOnInit() {
    this.pokequizService.getScoreboard().subscribe(response => {
      this.scoreboard = response;
      console.log(this.scoreboard);
    });
}

}
