import { Component, Input, OnInit } from '@angular/core';
import Livros from 'src/app/model/livros';
import { BookStoreService } from 'src/app/service/book-store.service';

@Component({
  selector: 'app-livros-item',
  templateUrl: './livros-item.component.html',
  styleUrls: ['./livros-item.component.css']
})
export class LivrosItemComponent implements OnInit {

  livros: Array<Livros> = [];

  constructor(private bookStore: BookStoreService) { }

  ngOnInit(): void {
    this.getAll();
    
  }

  getAll(){
    this.bookStore.getAll().subscribe(response =>{
      this.livros = response;
      console.log(this.livros)
    })
  }

}
