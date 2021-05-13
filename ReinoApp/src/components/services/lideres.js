import {URL_API} from './base';

export function consultarmembros(){

    return fetch('${URL_API}/lideres').then (resultado =>resultado.json());


}