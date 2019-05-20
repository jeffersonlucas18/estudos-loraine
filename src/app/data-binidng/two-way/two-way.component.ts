import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html'
})
export class TwoWayComponent implements OnInit {

  nome:string ="abc";

  constructor() { }

  ngOnInit() {
  }

}
