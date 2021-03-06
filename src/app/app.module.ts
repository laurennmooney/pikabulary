import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { PokequizService } from "./pokequiz.service";
import { QuizpageComponent } from "./quizpage/quizpage.component";
import { RouterModule, Routes } from "@angular/router";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { InstructionsComponent } from "./instructions/instructions.component";
import { ScoreboardComponent } from "./scoreboard/scoreboard.component";
import { FormsModule } from "@angular/forms";
import { ResultspageComponent } from "./resultspage/resultspage.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  {
    path: "home",
    component: LandingpageComponent,
    data: { animation: "Home" }
  },
  {
    path: "instructions",
    component: InstructionsComponent,
    data: { animation: "Instructions" }
  },
  {
    path: "quiz",
    component: QuizpageComponent,
    data: { animation: "Quiz" }
  },
  {
    path: "results",
    component: ResultspageComponent,
    data: { animation: "Results" }
  },
  {
    path: "scores",
    component: ScoreboardComponent,
    data: { animation: "Scores" }
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizpageComponent,
    LandingpageComponent,
    InstructionsComponent,
    ScoreboardComponent,
    ResultspageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [PokequizService],
  bootstrap: [AppComponent]
})
export class AppModule {}
