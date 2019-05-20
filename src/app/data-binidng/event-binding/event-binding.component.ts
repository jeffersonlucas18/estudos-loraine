import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clicado() {

    alert('clicado');
  }
  espaco(evento: KeyboardEvent) {
    console.log((<HTMLInputElement>evento.target).value);
  }
}
