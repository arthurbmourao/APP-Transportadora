import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FreteService } from '../../../../services/frete/frete.service';
import { CaminhoneiroComponent } from '../../../caminhoneiro_components/caminhoneiro/caminhoneiro.component';
import { AdminService } from '../../../../services/admin/admin.service';
import { CaminhoneiroService } from '../../../../services/caminhoneiro/caminhoneiro.service';
import { Admin } from '../../../../types/Admin';

@Component({
  selector: 'app-frete.cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './frete.cadastro.component.html',
  styleUrl: './frete.cadastro.component.css'
})
export class FreteCadastroComponent {
    frete: any = {
      origem: '',
      destino: '',
      valor: 0,
      status: '',
      caminhoneiro: { id: null },
      admin: { id: null }
    };
    listaCaminhoneiros: any[] = [];
    listaAdmins: Admin[] = [];
  
    constructor(
      private service: FreteService,
      private serviceCaminhoneiro: CaminhoneiroService,
      private serviceAdmin: AdminService
    ) {}
    
      ngOnInit(): void {
        this.carregarCaminhoneiros()
        this.carregarAdmins()
      }

      cadastrar() : void{
        console.log("Dados que vão para o Back-end:", this.frete);
        this.service.cadastrar(this.frete).subscribe({
          next: (res: any) =>{
            alert('Frete cadastrado com sucesso')
            this.frete ={
              origem : '',
              destino : '',
              valor : 0,
              status : '',
              nomeCaminhoneiro: '',
              nomeAdmin : ''
            }
          },
          error:(err: any) =>{
            console.log(err);
            alert('Algo deu errado')
          }
        });
      }

      carregarCaminhoneiros(): void {
        this.serviceCaminhoneiro.listarTodos().subscribe({
        next: (dados: any[]) => this.listaCaminhoneiros = dados,
        error: (err: any) => console.error('Erro ao buscar caminhoneiros', err)
        });
      }

      carregarAdmins(): void {
        this.serviceAdmin.listarTodos().subscribe({
          next: (dados: Admin[]) => this.listaAdmins = dados,
          error: (err: any) => console.error('Erro ao buscar admins', err)
        });
  }
}