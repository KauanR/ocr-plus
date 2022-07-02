import { Component } from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {

    tesseractUrl: string = 'https://github.com/tesseract-ocr/tesseract'
    puppeteerUrl: string = 'https://github.com/puppeteer/puppeteer'

}