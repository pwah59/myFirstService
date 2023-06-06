import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  // tableau vide avec sa structure d'infos 
  public cocktail = [{ name: '', price: 0, image: '' }];


  constructor() {
    // 2 exemples de cocktails...
    let cock1 = { name: 'Blue Lagoon', price: 18, image: 'Blue_lagoon.png' }
    let cock2 = { name: 'Bloody Mary', price: 16, image: 'Bloody_mary.png' }
    //ajout des 2 premiers exemples à ma liste 
    this.cocktail.push(cock1);;
    this.cocktail.push(cock2);
  }

  // pour chaque objet cocktail de mon tableau - liste, afficher les props du cocktail cock
  getCocktails() {
    let liste = [{ name: '', price: 0, image: '' }]
    //for (let cock of this.cocktail) {
    //console.log('Voici le : ' + cock.name + ' ' + cock.price + ' ' + cock.image)
    liste = this.cocktail
  }

}


