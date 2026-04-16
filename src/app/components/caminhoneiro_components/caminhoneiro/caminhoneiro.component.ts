import { Component, OnInit } from '@angular/core';
import { CaminhoneiroService } from '../../../services/caminhoneiro/caminhoneiro.service';

@Component({
  selector: 'app-caminhoneiro',
  standalone: true,
  imports: [],
  templateUrl: './caminhoneiro.component.html',
  styleUrl: './caminhoneiro.component.css'
})
export class CaminhoneiroComponent implements OnInit{
  listaCaminnhoneiros : any[] = [];

  constructor(private service : CaminhoneiroService){}

  ngOnInit(): void {
    
  }

  carregarCaminhoneiros(){
    this.service.listarTodos().subscribe({
      next: (dados) => this.listaCaminnhoneiros = dados,
      error: (err) => console.error('Erro ao buscar caminhoneiros', err)
    });
  }
}
