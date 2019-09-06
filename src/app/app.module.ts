import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokequizService } from './pokequiz.service';
import { QuizpageComponent } from './quizpage/quizpage.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokequizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
