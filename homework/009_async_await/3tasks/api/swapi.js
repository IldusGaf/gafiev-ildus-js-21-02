// Для работы со SWAPI
import { createFetch } from '../utils/fetchUtils.mjs'
import {objLinks} from '../constants/swparams.js'

export const swapi = { // Экспорт в другой модуль
    getMain: createFetch(objLinks.current),
    getMainNext: createFetch(objLinks.next),//У меня не получается передать измененное свойство objLinks :(
}
