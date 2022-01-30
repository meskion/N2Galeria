import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EntradasComponent } from "./views/entradas/entradas.component";
import { ExpoComponent } from "./views/exposiciones/expo/expo.component";

import { ExposicionesComponent } from "./views/exposiciones/exposiciones.component";

import { IndexComponent } from "./views/index/index.component";
import { NoticiasComponent } from "./views/noticias/noticias.component";


const routes: Routes = [

  { path: "expos", component: ExposicionesComponent },
  {path: "expos/:id", component: ExpoComponent},
  { path: "entradas", component: EntradasComponent },
  { path: "noticias", component: NoticiasComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
