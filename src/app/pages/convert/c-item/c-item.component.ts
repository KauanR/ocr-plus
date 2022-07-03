import { HttpClient } from '@angular/common/http'
import { Component, Input, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { ConvertItem } from '../interfaces/c-item'

interface DataControl {
    loading: boolean
    error: boolean
    data: {
        text: string
        translatedText: string
    }
}

const API_URL = environment.apiUrl || 'http://localhost:8080'

@Component({
    selector: 'app-convert-item',
    templateUrl: 'c-item.component.html',
    styleUrls: ['c-item.component.scss']
})
export class ConvertItemComponent implements OnInit {

    @Input() item: ConvertItem

    dataCtrl: DataControl

    constructor(
        private http: HttpClient
    ) {
        this.item = {} as ConvertItem
        this.dataCtrl = {
            data: null as any,
            error: false,
            loading: true
        }
    }

    ngOnInit(): void {
        this.loadData()
        this.loadImg()
    }

    private loadData(): void {
        let url = `${API_URL}/convert?lang=${this.item.lang}`
        if(this.item.translate !== 'none') url += `&translate=${this.item.translate}`

        let payload: any
        if(this.item.type === 'url') {
            payload = {imageUrl: this.item.url}
        } else {
            payload = new FormData()
            payload.append('file', this.item.file)
        }

        this.http.post<any>(url, payload).subscribe({
            next: (data) => {
                this.dataCtrl.data = {
                    text: data.originalText,
                    translatedText: data.translate
                }
                this.dataCtrl.loading = false
            },
            error: () => {
                this.dataCtrl.error = true
                this.dataCtrl.loading = false
            }
        })
    }

    private loadImg(): void {
        if(this.item.url) return

        let reader = new FileReader()

        reader.onload = (event: any) => {
            this.item.url = event.target.result
        }

        reader.onerror = (event: any) => {
            console.log('reader onerror', event)
            this.item.url = '_error'
        }

        reader.readAsDataURL(this.item.file as File)
    }

}