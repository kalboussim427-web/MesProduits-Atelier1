import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-binding',
  styles: ``,
  templateUrl: './binding.html',
})
export class Binding {
  titre : string = "Demo du data binding Interpolation";

  status : boolean = false;

  nom : string = "Nadhem bel hadj";
  constructor() {}
    ngOnInit(): void {}
      changerTitre() {
         this.titre = "Nouveau Titre ";
      }
}
