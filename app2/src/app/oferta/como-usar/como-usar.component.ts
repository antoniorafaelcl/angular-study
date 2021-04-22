import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = ''
 

  constructor(
              private route: ActivatedRoute, 
              private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id']
    this.ofertasService.getComoUsarOfertaPorId(id).then((response: any) => {
      this.comoUsar = response[0].descricao;
      console.log(response[0].descricao);
 })
     
 }

}