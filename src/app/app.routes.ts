import { Routes } from '@angular/router';
import { AdminComponent } from '../app/components/admin_components/admin/admin.component'; 

import { CaminhoneiroComponent } from '../app/components/caminhoneiro_components/caminhoneiro/caminhoneiro.component';

export const routes: Routes = [
    
    { path: 'admin-listar', component: AdminComponent },
    {path: 'caminhoneiro-listar', component: CaminhoneiroComponent},

  { 
    path: '', 
    redirectTo: '/admin/admin-listar', 
    pathMatch: 'full' 
  }
];


