import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  itemList: any[] = [
    {
      name: "Bertrand",
      result: 15
    }
  ];
  name_tmp: string;
  result_tmp: number;

  constructor() { }

  addItem() {
    this.name_tmp = (<HTMLInputElement>document.querySelector('#name')).value;
    this.result_tmp = +(<HTMLInputElement>document.querySelector('#result')).value;

    if (this.name_tmp && (this.result_tmp >= 0 && this.result_tmp <= 20)) {
      this.itemList.push(
        {
          name: this.name_tmp,
          result: this.result_tmp
        });
      (<HTMLInputElement>document.querySelector('#name')).value = "";
      (<HTMLInputElement>document.querySelector('#result')).value = "";
    } else {
      alert('Erreur dans la saisie des champs. Le nom et le prénom doivent être des chaînes de caractères et le résultat un nombre compris entre 0 et 20');
    }
  }

  clearList() {
    this.itemList = [];
  }

}
