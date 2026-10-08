import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Produit} from '../model/produits.models';
import {ProduitService} from '../services/produit';

@Component({
  imports: [FormsModule],
  standalone: true,
  selector: 'app-add-produit',
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {
  newProduit = new Produit();

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
  }
  addProduit() {
    this.produitService.ajouterProduit(this.newProduit);
  }
}
