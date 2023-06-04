import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  champSaisi = new FormControl('');
  public photo: string;
  public ingredient: string;
  public alergene: string;
  public nova: string;
  public nutriscore: string;
  public huil: string;
  public pays: string;


  constructor(private http: HttpClient) {
    this.photo = "";
    this.ingredient = "";
    this.alergene = "";
    this.nova = "";
    this.nutriscore = "";
    this.pays = "";
    this.huil = "";
  }

  public afficherChampSaisi() {
    return this.http.get<any>("https://world.openfoodfacts.org/api/v0/product/" + this.champSaisi.value + ".json")

      .subscribe((data) => {

        console.log(data)
        this.photo = data.product.image_url,
        this.ingredient = data.product.ingredients_text_fr,
        this.alergene = data.product.allergens_from_ingredients,
        this.nova = data.product.nova_groups_tags;
        this.nutriscore = data.product.nutrition_grade_fr;
        this.pays = data.product.stores;
        this.huil = data.product.ingredient_from_palm_oil_n;
        
      });
  }




};

/*this.capitale = data.capital[0],
this.population = data[0].population,
this.monnaie = data[0].currencies[Object.keys(data[0].currencies)[0]].name
this.langue = data[0].languages[Object.keys(data[0].languages)[0]];

*/
