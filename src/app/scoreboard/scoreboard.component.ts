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
  grade3Selected: boolean;
  grade4Selected: boolean;
  grade5Selected: boolean;

  constructor(private pokequizService: PokequizService) {}

  ngOnInit() {
    this.gradeLevel = this.pokequizService.setUserGradeLevel();

    this.autoSelectGrade();

    this.pokequizService.getScoreboard(this.gradeLevel).subscribe(response => {
      this.scoreboard = response;
      console.log(this.scoreboard);
    });
  }

  autoSelectGrade() {
    if (this.gradeLevel === undefined || this.gradeLevel === "grade_3") {
      this.grade3Selected = true;
    } else if (this.gradeLevel === "grade_4") {
      this.grade4Selected = true;
    } else if (this.gradeLevel === "grade_5") {
      this.grade5Selected = true;
    }
  }

  clickForGrade3() {
    this.pokequizService.getGrade3Scores().subscribe(response => {
      this.scoreboard = response;
    });

    this.grade3Selected = true;

    this.grade4Selected = false;
    this.grade5Selected = false;
  }

  clickForGrade4() {
    this.pokequizService.getGrade4Scores().subscribe(response => {
      this.scoreboard = response;
      this.grade4Selected = true;

      this.grade3Selected = false;
      this.grade5Selected = false;
    });
  }

  clickForGrade5() {
    this.pokequizService.getGrade5Scores().subscribe(response => {
      this.scoreboard = response;
      this.grade5Selected = true;

      this.grade3Selected = false;
      this.grade4Selected = false;
    });
  }
}
