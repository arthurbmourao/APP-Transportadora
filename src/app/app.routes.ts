import { Routes } from '@angular/router';
import { AdminComponent } from '../app/components/admin_components/admin/admin.component'; 
import { AdminComponentCadastro } from '../app/components/admin_components/cadastro/admin.cadastro.component';
import { CaminhoneiroComponent } from '../app/components/caminhoneiro_components/caminhoneiro/caminhoneiro.component';

export const routes: Routes = [
    
    { path: 'admin-listar', component: AdminComponent },
    {path: 'caminhoneiro-listar', component: CaminhoneiroComponent},
    {path:'admin-cadastrar', component : AdminComponentCadastro},
  { 
    path: '', 
    redirectTo: 'admin-listar', 
    pathMatch: 'full' 
  }
];


