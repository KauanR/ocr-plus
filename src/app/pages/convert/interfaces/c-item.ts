export interface ConvertItem {
    type: 'url' | 'image'
    url?: string
    file?: File
    lang: 'por' | 'eng'
    translate: 'none' | 'por' | 'eng'
}