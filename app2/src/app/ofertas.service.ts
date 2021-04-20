import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {
        //
    }

    getOfertas(): Promise<Oferta[]>{
        //efetuar uma requisicao http e retornar uma promise de oferta[]
        return this.http.get<Oferta[]>('http://localhost:3000/ofertas')
        .toPromise()
        
        // .then( (resposta: any) => resposta() )
    }

    escondendo_Codigo_Comentado() {
        // getOfertas(): Oferta[] {
        //     // let ofertas = ['Oferta1', 'Oferta2', 'Oferta3'];
        //     return this.ofertas;
        // }

        // getOfertas2(): Promise<Oferta[]> {
        //     return new Promise((resolve, reject) => {
        //         //algum tipo de processamento que ao finalizar chamada a função resolve ou reject
        //         let deuCerto: boolean = true;

        //         if (deuCerto) {
        //             setTimeout( () => resolve(this.ofertas), 3000)
        //         }
        //         else{
        //             reject({
        //                 codigoErro: 404,
        //                 mensagemErro: 'Servidor não encontrado!'
        //             })
        //             // reject(console.error('deu merda!'));
        //         }
        //     })
        // }
    }

}