import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ConvertComponent } from './convert.component'

@NgModule({
    declarations: [
        ConvertComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: ConvertComponent
        }])
    ]
})
export class ConvertModule {}