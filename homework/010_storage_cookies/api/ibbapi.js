import { createFetch } from '../utils/fetchUtils.mjs'
import {UPLOAD_URL,KEY} from '../constants/ibbapi.js'

export const ibbapi = { // Экспорт в другой модуль
    uploadBase64UrlToImgBB: function (file) {
                 const reader = new FileReader();
                 reader.readAsDataURL(file)
                 reader.onload = () => {
                     console.log(reader.result)
                     const formData = new FormData();
                     formData.set('key', KEY)
                     formData.set('image', reader.result.replace(/^.*,/, ''))
                     createFetch(UPLOAD_URL, formData);
                 }
             },
}
