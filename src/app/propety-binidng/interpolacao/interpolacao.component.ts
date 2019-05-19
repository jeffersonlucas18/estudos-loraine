import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {

  total: number = 10+10;


  constructor() { }

  ngOnInit() {
  }
  getValor(){
    return 10;
  }
}
