import { OfertasModule } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css']
})
export class DiversaoComponent implements OnInit {

  private ofertas: OfertasModule[];

  constructor(private ofertasServices: OfertasService) { }

  ngOnInit(): void {
    this.ofertasServices.getOfertasPorCategoria('diversao')
    .then((ofertas: OfertasModule[]) => {
      this.ofertas = ofertas;
    })
  }

}
