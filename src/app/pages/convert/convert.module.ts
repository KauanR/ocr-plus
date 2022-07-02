import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { RouterModule } from '@angular/router'
import { ConvertComponent } from './convert.component'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { NgxMatFileInputModule } from '@angular-material-components/file-input'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import { ConvertFormComponent } from './c-form/c-form.component'
import { MatButtonModule } from '@angular/material/button'
import { ConvertItemComponent } from './c-item/c-item.component'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
    declarations: [
        ConvertComponent,
        ConvertFormComponent,
        ConvertItemComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forChild([{
            path: '',
            component: ConvertComponent
        }]),

        NgxMatFileInputModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonToggleModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatDividerModule
    ]
})
export class ConvertModule { }