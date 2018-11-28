import { Routes } from '@angular/router'

import { PainelComponent } from './component/painel/painel.component';
import { AdmPainelComponent } from './component/adm-painel/adm-painel.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { EditPostComponent } from './component/edit-post/edit-post.component';

export const ROUTES: Routes = [
    { path: '', component: PainelComponent },
    { path: 'adm', redirectTo: "adm/users" },
    { path: 'adm/users', component: AdmPainelComponent },
    { path: 'adm/users/edit/:id', component: EditUserComponent },
    { path: 'adm/posts', component: AdmPainelComponent },
    { path: 'adm/posts/edit/:id', component: EditPostComponent },
    { path: 'adm/comments', component: AdmPainelComponent }
]