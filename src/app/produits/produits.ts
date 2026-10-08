import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-produits',
  templateUrl: './produits.html',
})
export class Produits {
  produits : string[];

constructor() {
  this.produits = ["PC Asus", "Imprimante", "Tablette Samsung"];
}
}