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
  selectedButton: boolean = false;

  constructor(private pokequizService: PokequizService) {}

  ngOnInit() {
    this.gradeLevel = this.pokequizService.setUserGradeLevel();
    this.pokequizService.getScoreboard(this.gradeLevel).subscribe(response => {
      this.scoreboard = response;
      console.log(this.scoreboard);
    });
  }

  clickForGrade3() {
    this.pokequizService.getGrade3Scores().subscribe(response => {
      this.scoreboard = response;
    });
  }

  clickForGrade4() {
    this.pokequizService.getGrade4Scores().subscribe(response => {
      this.scoreboard = response;
    });
  }

  clickForGrade5() {
    this.pokequizService.getGrade5Scores().subscribe(response => {
      this.scoreboard = response;
    });
  }
}
