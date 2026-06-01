import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FreteService } from '../../../services/frete/frete.service';
import { Frete } from '../../../types/Frete';

@Component({
  selector: 'app-frete',
  standalone: true,
  imports: [],
  templateUrl: './frete.component.html',
  styleUrl: './frete.component.css'
})

export class FreteComponent implements OnInit{
  idFrete: number | null = null;
  listaFretes: Frete[] = [];

  constructor(private service : FreteService){}

  ngOnInit(): void {
    this.carregarFretes();
  }

    carregarFretes(): void {
      this.service.listarTodos().subscribe({
        next: (dados: Frete[]) => this.listaFretes = dados,
        error: (err: any) => console.error('Erro ao buscar Fretes', err)
      });
    }
}
