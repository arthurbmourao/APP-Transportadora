import { Routes } from '@angular/router';
import { AdminComponent } from '../app/components/admin_components/admin/admin.component'; 
import { AdminComponentCadastro } from '../app/components/admin_components/cadastro/admin.cadastro.component';
import { CaminhoneiroComponent } from './components/caminhoneiro_components/caminhoneiro/caminhoneiro.component';
import { CaminhoneiroCadastroComponent } from './components/caminhoneiro_components/cadastro/caminhoneiro.cadastro/caminhoneiro.cadastro.component';
import { FreteComponent } from './components/frete_components/frete/frete.component';
import { FreteCadastroComponent } from './components/frete_components/frete_cadastro/frete.cadastro/frete.cadastro.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    
    { path: 'admin-listar', component: AdminComponent },
    {path: 'caminhoneiro-listar', component: CaminhoneiroComponent},
    {path:'admin-cadastrar', component : AdminComponentCadastro},
    {path: 'caminhoneiro-cadastro', component : CaminhoneiroCadastroComponent},
    {path: 'frete', component : FreteComponent},
    {path: 'frete.cadastro', component : FreteCadastroComponent},
  { 
    path: '', 
    redirectTo: 'admin-listar', 
    pathMatch: 'full' 
  }
];


