import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokequizService } from './pokequiz.service';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: "home", component: LandingpageComponent },
  { path: "instructions", component: InstructionsComponent },
  { path: "quiz", component: QuizpageComponent},
  { path: "scores", component: ScoreboardComponent },
  { path: '', redirectTo: "/home", pathMatch: "full"},
];

@NgModule({
  declarations: [
    AppComponent,
    QuizpageComponent,
    LandingpageComponent,
    InstructionsComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [PokequizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
