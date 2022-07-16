import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import Livros from '../model/livros';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  apiUrl = 'http://localhost:8080/store/';

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Livros[]>{
    return this.httpClient.get<Livros[]>(this.apiUrl)
  }
  }