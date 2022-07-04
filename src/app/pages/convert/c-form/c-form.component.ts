import { Component, EventEmitter, Output } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { AcceptValidator } from '@angular-material-components/file-input'
import { ConvertItem } from '../interfaces/c-item'

@Component({
    selector: 'app-convert-form',
    templateUrl: 'c-form.component.html',
    styleUrls: ['c-form.component.scss']
})
export class ConvertFormComponent {

    @Output() submitEmitter: EventEmitter<ConvertItem>

    form: FormGroup
    formSub: Subscription

    constructor(private formBuilder: FormBuilder) {
        this.submitEmitter = new EventEmitter<ConvertItem>()

        this.form = this.formBuilder.group({
            type: ['url', Validators.required],
            url: ['', [Validators.required, ]],
            lang: ['por', Validators.required],
            translate: ['none', Validators.required]
        })
        this.formSub = {} as Subscription
    }

    ngOnInit(): void {
        this.formSub = this.form.valueChanges.subscribe(val => {
            if(val.type === 'url') {
                this.form.addControl(
                    'url', 
                    new FormControl('', [Validators.required, ]), 
                    { emitEvent: false }
                )
                this.form.removeControl('file', { emitEvent: false })
            } else {
                this.form.addControl(
                    'file', 
                    new FormControl('', [Validators.required, AcceptValidator('image/png, image/jpeg')]), 
                    { emitEvent: false }
                )
                this.form.removeControl('url', { emitEvent: false })
            }
        })
    }

    ngOnDestroy(): void {
        this.formSub.unsubscribe()
    }

    submit(): void {
        this.submitEmitter.emit(this.form.value)
        this.form.get('url')?.reset()
        this.form.get('file')?.reset()
    }

}