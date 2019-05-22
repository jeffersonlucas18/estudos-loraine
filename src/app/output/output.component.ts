import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html'
})
export class OutputComponent implements OnInit {

  constructor() { }

  valorInicial: number = 15;

  ngOnInit() {

  }
  onMudouValor(evento) {
   console.log(evento);
  }

}
