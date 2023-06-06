import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
  providers: [CocktailService]
})
export class CocktailListComponent {
  cocktails = [{ name: '', price: 0, image: '' }]


  constructor(public CocktailService: CocktailService) {

    let cock1 = { name: 'Monaco', price: 18, image: 'Monaco.png' }
    let cock2 = { name: 'Picon Bière', price: 18, image: 'Picon.png' }
    this.cocktails.push(cock1);;
    this.cocktails.push(cock2);
    this.CocktailService.getCocktails();
  }

  getCocktails() {
    this.CocktailService.getCocktails();
  }
}
