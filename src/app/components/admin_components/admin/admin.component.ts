import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AdminService } from '../../../services/admin/admin.service'; // Ajuste o caminho se necessário

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {
  mostrarPopUp = false;
  idAdminAtualizar: number | null= null;
  adminEdicao = { nome: '', email: '', senha:'' };

  listaAdmins: any[] = [];

  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.carregarAdmins();
  }

  carregarAdmins(): void {
    this.service.listarTodos().subscribe({
      next: (dados: any[]) => this.listaAdmins = dados,
      error: (err: any) => console.error('Erro ao buscar admins', err)
    });
  }

  abrirPopUp(admin: any){
    this.idAdminAtualizar = admin.id;
    this.adminEdicao = { 
      nome: admin.nome, 
      email: admin.email, 
      senha: ''
    };
    this.mostrarPopUp = true;
  }

  fecharPopUp(){
    this.mostrarPopUp = false;
    this.idAdminAtualizar = null;
  }

  confirmarAcao() {
  if (this.idAdminAtualizar) {
    this.service.atualizar(this.adminEdicao, this.idAdminAtualizar).subscribe({
      next: () => {
        console.log('ATUALIZAÇÃO FEITA')
        this.carregarAdmins(); 
        this.fecharPopUp();
      },
      error: (err) => console.error(err)
    });
    
  }
}



}
