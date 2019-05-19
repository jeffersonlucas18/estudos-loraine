import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propety-binidng',
  templateUrl: './propety-binidng.component.html',
  styleUrls: ['./propety-binidng.component.css']
})
export class PropetyBinidngComponent implements OnInit {

  url= 'https://www.google.com.br/url?sa=i&source=images&cd=&ved=2ahUKEwjb8oXHi6jiAhVjK7kGHVNeDi4QjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26cad%3Drja%26uact%3D8%26ved%3D2ahUKEwjb8oXHi6jiAhVjK7kGHVNeDi4QjRx6BAgBEAU%26url%3Dhttps%253A%252F%252Fblog.fotolia.com%252Fbr%252F2017%252F09%252F25%252Fa-abordagem-criativa-para-fotos-de-banco-de-imagens%252F%26psig%3DAOvVaw2fQdZ1Xj89vtQ0fmYBsLfY%26ust%3D1558372351229157&psig=AOvVaw2fQdZ1Xj89vtQ0fmYBsLfY&ust=1558372351229157'
  constructor() { }

  ngOnInit() {
  }
  
}
