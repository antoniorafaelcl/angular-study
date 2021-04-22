import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { OfertasModule  as  Oferta} from './shared/oferta.model'

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]> {
        // efetuar uma requisicao http
        // e retornar uma promise de oferta[]
        return this.http.get<Oferta[]>('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`http://localhost:3000/ofertas?categoria=${categoria}`)
        .toPromise()
    //    .then((resposta: any) => resposta())
    }
}