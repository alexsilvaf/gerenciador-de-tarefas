import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TarefasService} from "./shared";
import {ListarTarefaComponent} from './listar';


@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TarefasService
  ]
})
export class TarefasModule {
}
