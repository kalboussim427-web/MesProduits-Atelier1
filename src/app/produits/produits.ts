import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Produit} from '../model/produits.models';
import {ProduitService} from '../services/produit';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  imports: [CommonModule, DatePipe, RouterLink],
  selector: 'app-produits',
  standalone: true,
  templateUrl: './produits.html',
})
export class Produits {
  produits! : Produit[];

constructor(private produitService : ProduitService) {
  this.produits = produitService.listerProduits();
}
ngOnInit(): void {
}
supprimerProduit(produit: Produit) {
  let conf = confirm("Etes-vous sûr ?");
  if (conf) {
    this.produitService.supprimerProduit(produit);
  }
}
}