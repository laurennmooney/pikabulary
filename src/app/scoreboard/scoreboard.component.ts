import { Component, OnInit } from "@angular/core";
import { PokequizService } from "../pokequiz.service";

@Component({
  selector: "app-scoreboard",
  templateUrl: "./scoreboard.component.html",
  styleUrls: ["./scoreboard.component.css"]
})
export class ScoreboardComponent implements OnInit {
  scoreboard: any;
  gradeLevel: string;

  constructor(private pokequizService: PokequizService) {}

  ngOnInit() {
    this.gradeLevel = this.pokequizService.setUserGradeLevel();
    this.pokequizService.getScoreboard(this.gradeLevel).subscribe(response => {
      this.scoreboard = response;
      console.log(this.scoreboard);
    });
  }
}
