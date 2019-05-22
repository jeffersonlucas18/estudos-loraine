import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropetyBinidngComponent } from './data-binidng/propety-binidng.component';
import { InterpolacaoComponent } from './data-binidng/interpolacao/interpolacao.component';
import { ClassBindingComponent } from './data-binidng/class-binding/class-binding.component';
import { EventBindingComponent } from './data-binidng/event-binding/event-binding.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TwoWayComponent } from './data-binidng/two-way/two-way.component';
import {FormsModule} from '@angular/forms';
import { InputOutputComponent } from './data-binidng/input-output/input-output.component';
import { PropertyComponent } from './data-binidng/property/property.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { OutputComponent } from './output/output.component';
import {EventComponent} from "./output/event/event.component";

@NgModule({
  declarations: [
    AppComponent,
    PropetyBinidngComponent,
    InterpolacaoComponent,
    ClassBindingComponent,
    EventBindingComponent,
    NavbarComponent,
    TwoWayComponent,
    InputOutputComponent,
    PropertyComponent,
    NgClassComponent,
    OutputComponent,
    EventComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
