import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit {

  constructor(private title: Title) { }

    @Input() valor: number = 0;
    @Output() mudouValor = new EventEmitter();

  ngOnInit() {
    this.title.setTitle('Event Emitter');
  }
  mais() {
    this.valor ++;
    this.mudouValor.emit({novoValor: this.valor});
  }
  menos() {
    this.valor --;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
