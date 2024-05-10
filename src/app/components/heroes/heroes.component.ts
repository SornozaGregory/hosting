import { Component } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes:Heroe[]=[];


  constructor(private _heroesService: HeroesService, private router:Router, private route : ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    this.route.params.subscribe(params => {
      const termino = params['termino'];
      if(termino){
        this.heroes = this._heroesService.getHeroesBusqueda(termino);
      }
    });
    console.log(this.heroes);
  }

  verHeroe(idx:number){
    console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }
}
