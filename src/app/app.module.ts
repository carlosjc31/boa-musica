import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TabelaMusicasComponent } from "./tabela-musicas/tabela-musicas.component";

import { BrowserModule } from "@angular/platform-browser";
import { FormMusicasComponent } from "./form-musicas/form-musicas.component";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    TabelaMusicasComponent,
    FormMusicasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class AppModule { }
