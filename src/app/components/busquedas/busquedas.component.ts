import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html'
})
export class BusquedasComponent implements OnInit {

  heroes:any[] = [];
  termino:string;
  //busqueda:any;

  constructor(private _heroesServices:HeroesService,
              private activatedRoute: ActivatedRoute){
              }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesServices.buscarHeroes(params['termino']);
    });
    //this.heroes = this._heroesServices.getHeroes();
    console.log(this.heroes);

    //la funcion buscarHeroes(termino) regresa el arreglo de herores ya filtrado

  }

}
