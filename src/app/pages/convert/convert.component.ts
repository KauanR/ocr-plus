import { Component } from '@angular/core'
import { ConvertItem } from './interfaces/c-item'

@Component({
    selector: 'app-convert',
    templateUrl: 'convert.component.html',
    styleUrls: ['convert.component.scss']
})
export class ConvertComponent {

    items: ConvertItem[] = []

    addItem(item: ConvertItem): void {
        this.items.push(item)
    }

}