import { Component, OnInit } from '@angular/core';
import { CaminhoneiroService } from '../../../services/caminhoneiro/caminhoneiro.service';

@Component({
  selector: 'app-caminhoneiro',
  standalone: true,
  imports: [],
  templateUrl: './caminhoneiro.component.html',
  styleUrl: './caminhoneiro.component.css'
})
export class CaminhoneiroComponent implements OnInit {
  listaCaminhoneiros: any[] = [];

  constructor(private service: CaminhoneiroService) {}

  ngOnInit(): void {
    this.carregarCaminhoneiros();
  }

  carregarCaminhoneiros(): void {
    this.service.listarTodos().subscribe({
      next: (dados: any[]) => this.listaCaminhoneiros = dados,
      error: (err: any) => console.error('Erro ao buscar caminhoneiros', err)
    });
  }
}
