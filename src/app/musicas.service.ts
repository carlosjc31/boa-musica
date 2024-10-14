import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { musica } from './app.musicas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private apiUrl = 'http://localhost:3000/musicas';

  constructor(private http: HttpClient) { }

  getMusicas() {
    return this.http.get<musica[]>(this.apiUrl);
  }

  delete(musica: musica): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/musicas' + musica.id);
  }
}
