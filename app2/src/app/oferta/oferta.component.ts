import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { OfertasModule as Oferta} from '../shared/oferta.model'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(private route: ActivatedRoute, 
              private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    //console.log('ID recuperado da rota: ', this.route.snapshot.params['id'])
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta) => {
        this.oferta = oferta[0]
        //console.log(this.oferta)
      })
    // this.route.params.subscribe((parametro: any) => {
    //  console.log(parametro.id)
    // })
  }
}
