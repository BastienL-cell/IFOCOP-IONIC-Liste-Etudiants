import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  etudiants: any;

  constructor(private etudiantService: EtudiantService) { 
    
  this.etudiants = this.etudiantService.itemList;

  }


  ngOnInit() {
  }

}
