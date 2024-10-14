import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormMusicasComponent } from "./form-musicas/form-musicas.component";
import { TabelaMusicasComponent } from "./tabela-musicas/tabela-musicas.component";

const routes: Routes = [
  { path: '', redirectTo: '/musicas', pathMatch: 'full' },
  { path: 'musicas', component: TabelaMusicasComponent },
  { path: 'musica/:id', component: FormMusicasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
