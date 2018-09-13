import { Routes } from '@angular/router'

import { PainelComponent } from './component/painel/painel.component'
import { AboutComponent } from './component/about/about.component'
import { FeaturesComponent } from './component/features/features.component'

export const ROUTES: Routes = [
    { path: '', component: PainelComponent },
    { path: 'about', component: AboutComponent },
    { path: 'features', component: FeaturesComponent },
]