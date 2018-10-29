import { Routes } from '@angular/router'

import { PainelComponent } from './component/painel/painel.component';
import { AdmPainelComponent } from './component/adm-painel/adm-painel.component';

export const ROUTES: Routes = [
    { path: '', component: PainelComponent },
    { path: 'adm', redirectTo: "adm/users" },
    { path: 'adm/users', component: AdmPainelComponent },
    { path: 'adm/posts', component: AdmPainelComponent },
    { path: 'adm/comments', component: AdmPainelComponent }
]