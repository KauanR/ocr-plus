import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './header.component'

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {}