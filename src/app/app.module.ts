import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropetyBinidngComponent } from './propety-binidng/propety-binidng.component';
import { InterpolacaoComponent } from './propety-binidng/interpolacao/interpolacao.component';
import { ClassBindingComponent } from './propety-binidng/class-binding/class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    PropetyBinidngComponent,
    InterpolacaoComponent,
    ClassBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
