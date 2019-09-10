import { Component, OnInit } from '@angular/core';
import { PokequizService } from '../pokequiz.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  username: string;

  constructor(private pokequizService: PokequizService) { }

  ngOnInit() {
    this.username = this.pokequizService.getUsername();
  }

}
