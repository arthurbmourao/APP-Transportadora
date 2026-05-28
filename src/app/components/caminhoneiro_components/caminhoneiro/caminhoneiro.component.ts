import { Component, OnInit } from '@angular/core';
import { CaminhoneiroService } from '../../../services/caminhoneiro/caminhoneiro.service';
import { Caminhoneiro } from '../../../types/Caminhoneiro';

@Component({
  selector: 'app-caminhoneiro',
  standalone: true,
  imports: [],
  templateUrl: './caminhoneiro.component.html',
  styleUrl: './caminhoneiro.component.css'
})
export class CaminhoneiroComponent implements OnInit {
  idCaminhoneiro: number | null = null;
  mostrarPopUpAtualizar = false;
  mostrarPopUpDeletar = false;
  caminhoneiroEdicao : Caminhoneiro = { id : 0, nome: '', cpf: '', cnh:'', placaVeiculo:''};
  caminhoneiroDeletar : Caminhoneiro = { id: 0, nome: '', cpf: '', cnh:'', placaVeiculo:'' };
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
  
  abrirPopUpAtualizar(caminhoneiro : Caminhoneiro) : void{
    this.idCaminhoneiro = caminhoneiro.id ?? null;
    this.caminhoneiroEdicao = {
      id : caminhoneiro.id,
      nome : caminhoneiro.nome,
      cpf : caminhoneiro.cpf,
      cnh : caminhoneiro.cnh,
      placaVeiculo : caminhoneiro.placaVeiculo
    }

    this.mostrarPopUpAtualizar = true;
  }

  fecharPopUpAtualizar(): void{
    this.mostrarPopUpAtualizar = false;
    this.idCaminhoneiro = null
  }

  abrirPopUpDeletar(caminhoneiro : Caminhoneiro): void{
    this.idCaminhoneiro = caminhoneiro.id ?? null;
    this.caminhoneiroDeletar = {
      id : caminhoneiro.id,
      nome : caminhoneiro.nome,
      cpf : caminhoneiro.cpf,
      cnh : caminhoneiro.cnh,
      placaVeiculo : caminhoneiro.placaVeiculo
    }
  }

  fecharPopUpDeletar(): void{
    this.mostrarPopUpDeletar = false;
    this.idCaminhoneiro = null;
  }

  //confirmarAcaoAtualizar(){
  //  if(this.idCaminhoneiro){
  //    this.service.atualizar(this.a)
  //  }
  //}

}
