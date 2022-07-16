import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosListaComponent } from './pages/livros/livros-lista/livros-lista.component';

const routes: Routes = [
  {
    path: "", component: LivrosListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
