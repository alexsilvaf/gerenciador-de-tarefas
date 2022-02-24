import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TarefaRoutes} from "./tarefas";

export const routes: Routes = [
  ...TarefaRoutes
];

@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export  class AppRoutingModule {}
