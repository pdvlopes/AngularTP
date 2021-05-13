import { URL_API } from "./base";

export function consultarMembros(callback){
    fetch(`${URL_API}/membros`)
    .then(resultado => resultado.json().then(callback));
}

