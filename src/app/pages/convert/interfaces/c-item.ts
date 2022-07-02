export interface ConvertItem {
    type: 'url' | 'image'
    url?: string
    file?: File
    lang: 'port' | 'eng'
    translate: 'none' | 'port' | 'eng'
}