import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  itemList: any[] = [
    {
      id: 1,
      name: "Bertrand",
      result: 15
    }
  ];
  name_tmp: string;
  result_tmp: number;
  tmp: number;
  id_tmp: number;
  etudiant: any;

  constructor(private router: Router) { }

    // Ajout d'un étudiant dans la liste
  ajoutEtudiant() {
    this.name_tmp = (<HTMLInputElement>document.querySelector('#name')).value;
    this.result_tmp = +(<HTMLInputElement>document.querySelector('#result')).value;
    this.id_tmp = this.getMaxId() + 1;

    if (this.name_tmp && (this.result_tmp >= 0 && this.result_tmp <= 20)) {
      this.itemList.push(
        {
          id: this.id_tmp,
          name: this.name_tmp,
          result: this.result_tmp
        });
        this.clear();
    } else {
      alert('Erreur dans la saisie des champs. Le nom et le prénom doivent être des chaînes de caractères et le résultat un nombre compris entre 0 et 20');
    }
    this.returnHome();
  }
    // Redirection vers la page d'accueil
  returnHome() {
    this.router.navigate(['/home']); 
  }

  // Mise à jour d'un étudiant
  updateEtudiant(id: string) {
    this.etudiant = this.getItem(+id);

    this.name_tmp = (<HTMLInputElement>document.querySelector('#name')).value;
    this.result_tmp = +(<HTMLInputElement>document.querySelector('#result')).value;

    if (this.name_tmp && (this.result_tmp >= 0 && this.result_tmp <= 20)) {
      this.etudiant.name = this.name_tmp;
      this.etudiant.result = this.result_tmp;
      this.returnHome();
    } else {
      alert('Erreur dans la saisie des champs. Le nom et le prénom doivent être des chaînes de caractères et le résultat un nombre compris entre 0 et 20');
    }

  }

  // Recevoir un item précis de la liste
  getItem(id: number) {
    const etudiant = this.itemList.find((s)=> {
      return s.id === id;
    });
    return etudiant;
  }
  // Efface les champs des inputs
  clear() {
    (<HTMLInputElement>document.querySelector('#name')).value = "";
    (<HTMLInputElement>document.querySelector('#result')).value = "";
  }

    // Récupération du plus grand id dans la itemList
  getMaxId() {
    for(let item of this.itemList){
      this.tmp = 0;
      if (item.id > this.tmp) this.tmp = item.id 
    }
    return this.tmp;
  }

    // Efface toute la liste
  clearList() {
    this.itemList = [];
  }

}
