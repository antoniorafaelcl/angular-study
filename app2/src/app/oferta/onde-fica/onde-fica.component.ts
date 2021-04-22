import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService
) { }

ngOnInit() {
  const id = this.route.parent.snapshot.params['id']
  this.ofertasService.getOndeFicaOfertaPorId(id).then((response: any) => {
    this.ondeFica = response[0].descricao;
    console.log(response[0].descricao);
})

}
}
