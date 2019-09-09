import { Component, OnInit } from '@angular/core';
import { PokequizService } from '../pokequiz.service';

@Component({
  selector: 'app-resultspage',
  templateUrl: './resultspage.component.html',
  styleUrls: ['./resultspage.component.css']
})
export class ResultspageComponent implements OnInit {
  results: any;

  constructor(private pokequizService: PokequizService) { }

  ngOnInit() {
    this.results = this.pokequizService.sendResultsToResultsComponent();
    console.log(this.results);
  }

}
