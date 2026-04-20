import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FreteService } from './services/frete/frete.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'APP-Transportadora';

  listaDeFretes: any[] = [];

  constructor(private service: FreteService) {}

  ngOnInit(): void {
    this.service.listarTodos().subscribe({
      next: (dados: any[]) => {
        this.listaDeFretes = dados;
        console.log(this.listaDeFretes);
      },
      error: (err: any) => {
        console.error('Erro ao buscar fretes', err);
      }
    });
  }
}
