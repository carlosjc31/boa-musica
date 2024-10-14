import { MusicasService } from '../musicas.service';
import { musica } from './../app.musicas';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-musicas',
  templateUrl: './tabela-musicas.component.html',
  styleUrl: './tabela-musicas.component.css'
})
export class TabelaMusicasComponent {

  musicas: musica[] = [];

  constructor(private musicasService: MusicasService) {}

  ngOnInit(): void {
    this.musicasService.getMusicas().subscribe( data =>{
      this.musicas = data
    });
  }
  delete(musica: musica){
    this.musicasService.delete(musica).subscribe({
      next: () => this.loadMusicas()
    });
  }
  loadMusicas(): void {
    this.musicasService.getMusicas().subscribe(data =>{
      this.musicas = data;
    });
  }

}
