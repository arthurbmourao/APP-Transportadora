import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../services/admin/admin.service'; // Ajuste o caminho se necessário

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {
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
}
