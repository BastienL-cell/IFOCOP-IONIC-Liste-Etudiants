import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.page.html',
  styleUrls: ['./modify-item.page.scss'],
})
export class ModifyItemPage implements OnInit {
  name: string;
  item: any;
  id: string;
  result: string;
  idEtudiant: number;

  constructor(
    private etudiantService: EtudiantService,
    private route: ActivatedRoute) { }

  ngOnInit():void {
    const id = this.route.snapshot.params["id"];
    this.id = id;
    this.name = this.etudiantService.getItem(+this.id).name;
    this.result = this.etudiantService.getItem(+this.id).result;
  }
}
