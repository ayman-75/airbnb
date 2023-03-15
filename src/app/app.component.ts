import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Welcome to {{ pokemonsList[0] }} ! </h1>`
})
export class AppComponent implements OnInit {
  pokemonsList = ['Bulbizarre','Salameche','Carapuce'];

  ngOnInit(): void{
    console.table(this.pokemonsList);
    this.selectPokemon("Bulbizarre");
  }


  selectPokemon(pokemonName:string){
    console.log(`Vous avez cliqué sur le pokemon ${pokemonName}`)
  }

}
