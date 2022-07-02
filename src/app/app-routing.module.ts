import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'convert',
                loadChildren: () => import('./pages/convert/convert.module').then(mod => mod.ConvertModule)
            },
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}