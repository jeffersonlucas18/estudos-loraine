import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html'
})
export class NgClassComponent implements OnInit {

  meuFavorito: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  clicado(){
    this.meuFavorito = !this.meuFavorito;
  }
}
