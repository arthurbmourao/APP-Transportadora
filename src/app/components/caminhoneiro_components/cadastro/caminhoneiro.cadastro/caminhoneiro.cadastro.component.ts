import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaminhoneiroService } from '../../../../services/caminhoneiro/caminhoneiro.service';
import { Caminhoneiro } from '../../../../types/Caminhoneiro';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-caminhoneiro.cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './caminhoneiro.cadastro.component.html',
  styleUrl: './caminhoneiro.cadastro.component.css'
})
export class CaminhoneiroCadastroComponent {

  caminhoneiro : {nome : string; cpf: string; cnh : string; placaVeiculo : string} = {
      nome : '',
      cpf : '',
      cnh : '',
      placaVeiculo : ''
  }

  confirmarSenha : string = ''

  constructor(private service: CaminhoneiroService) {}
  
    ngOnInit(): void {
      
    }

    cadastrar() : void{
      this.service.cadastrar(this.caminhoneiro).subscribe({
        next: (res: any) => {
        alert('Caminhoneiro cadastrado com Sucesso');
        this.caminhoneiro = {
          nome : '',
          cpf : '',
          cnh : '',
          placaVeiculo : ''
        };
      },
      error: (err: any) => {
        console.log(err);
        alert('Ops, algo de errado aconteceu');
      }
    }); 
      
    }
}
