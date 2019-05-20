import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClassBindingComponent} from './data-binidng/class-binding/class-binding.component';
import {EventBindingComponent} from './data-binidng/event-binding/event-binding.component';
import {AppComponent} from './app.component';
import {InterpolacaoComponent} from './data-binidng/interpolacao/interpolacao.component'  ;
import {TwoWayComponent} from './data-binidng/two-way/two-way.component';
import {InputOutputComponent} from './data-binidng/input-output/input-output.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'Class-Binding', component: ClassBindingComponent},
  {path: 'Interpolação', component: InterpolacaoComponent},
  {path: 'Event_binding', component: EventBindingComponent},
  {path: 'TwoWay', component: TwoWayComponent},
  {path: 'Input_Output', component: InputOutputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
