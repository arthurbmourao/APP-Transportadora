import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AdminService } from '../../../services/admin/admin.service'; // Ajuste o caminho se necessário
import {Admin} from '../../../types/Admin';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {
  idAdmin: number | null= null;
  mostrarPopUpAtualizar = false;
  mostrarPopUpDeletar = false;
  adminEdicao = { nome: '', email: '', senha:'' };
  adminDeletar = { nome: '', email: '', senha:'' };

  listaAdmins: Admin[] = [];

  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.carregarAdmins();
  }

  carregarAdmins(): void {
    this.service.listarTodos().subscribe({
      next: (dados: Admin[]) => this.listaAdmins = dados,
      error: (err: any) => console.error('Erro ao buscar admins', err)
    });
  }

  abrirPopUpAtualizar(admin: any){
    this.idAdmin = admin.id;
    this.adminEdicao = { 
      nome: admin.nome, 
      email: admin.email, 
      senha: ''
    };
    this.mostrarPopUpAtualizar = true;
  }

  abrirPopUpDeletar(admin: any): void{
    this.idAdmin = admin.id;
    this.adminDeletar = {
      nome : admin.nome,
      email : admin.email,
      senha : admin.senha
    }
    this.mostrarPopUpDeletar = true
  }

  fecharPopUpAtualizar(){
    this.mostrarPopUpAtualizar = false;
    this.idAdmin = null;
  }

  fecharPopUpDeletar(){
    this.mostrarPopUpDeletar = false;
    this.idAdmin = null;
  }

  confirmarAcaoAtualizar() {
  if (this.idAdmin) {
    this.service.atualizar(this.adminEdicao, this.idAdmin).subscribe({
      next: () => {
        console.log('ATUALIZAÇÃO FEITA')
        this.carregarAdmins(); 
        this.fecharPopUpAtualizar();
      },
      error: (err) => console.error(err)
    });
    
  }
}

  confirmarAcaoDeletar(){
    if(this.idAdmin){
      this.service.deletar(this.idAdmin).subscribe({
        next: () =>{
          this.carregarAdmins();
          this.fecharPopUpDeletar();
        },
        error: (err) => console.log(err)
      });
    }
  }
}
