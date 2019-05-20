import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

    numero = 0;

    valorInicial = 15;

   @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onMudouValor(evento){
    console.log(evento);
  }

  mais() {
    this.numero++;
    this.mudouValor.emit({novoValor: this.numero});
   }

  menos() {
    this.numero--;
    this.mudouValor.emit({novoValor: this.numero});
  }

}
