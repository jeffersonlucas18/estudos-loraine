import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClassBindingComponent} from "./data-binidng/class-binding/class-binding.component";
import {EventBindingComponent} from "./data-binidng/event-binding/event-binding.component";
import {AppComponent} from "./app.component";
import {InterpolacaoComponent} from "./data-binidng/interpolacao/interpolacao.component";


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'Class-Binding', component: ClassBindingComponent},
  {path: 'Interpolação', component: InterpolacaoComponent},
  {path: 'Event_binding', component: EventBindingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
