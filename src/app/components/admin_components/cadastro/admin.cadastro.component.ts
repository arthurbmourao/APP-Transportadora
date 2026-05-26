import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-admin-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.cadastro.component.html'
})

export class AdminComponentCadastro implements OnInit {

  admin: { nome: string; email: string; senha: string } = {
    nome: '',
    email: '',
    senha: '',
  };

  confirmarSenha: string = '';

  constructor(private service: AdminService) {}

  ngOnInit(): void {
    
  }
  
  cadastrar(): void {
    if(this.admin.senha !== this.confirmarSenha){
      alert('Senhas devem ser iguais');
      return;
    }

    this.service.cadastro(this.admin).subscribe({
      next: (res: any) => {
        alert('Admin cadastrado com Sucesso');
        this.admin = {
          nome: '',
          email: '',
          senha: '',
        };
      },
      error: (err: any) => {
        console.log(err);
        alert('Ops, algo de errado aconteceu');
      }
    });
  }
}