// Для работы со swapi
import {createFetch} from '../utils/fetchUtils'
import {objLinks} from '../constants/swparams'

export const swapi = { // Экспорт в другой модуль
    getMain: createFetch(objLinks.current),
    getMainNext: createFetch(objLinks.next),//У меня не получается передать измененное свойство objLinks :(
}
