import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

    numero = 0;

    @Input() valorInicial = 15;

  constructor() { }

  ngOnInit() {
  }

  mais() {
    this.numero++;
  }

  menos(){
    this.numero--;
  }

}
