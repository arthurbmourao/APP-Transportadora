import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FreteService } from './services/frete.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  listaDeFretes: any[] = [];

  constructor (private service: FreteService){}

  ngOnInit(): void {
    this.service.listarTodos().subscribe(dados =>{
      this.listaDeFretes = dados;
      console.log(this.listaDeFretes);
    })
  }
  
}
