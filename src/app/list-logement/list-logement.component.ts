import { Component } from '@angular/core';
import { LOGEMENTS } from '../mock-logement-list';
import { Logement } from '../logement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-logement',
  templateUrl: './list-logement.component.html',
  styleUrls: ['./list-logement.component.css']


})
export class ListLogementComponent{

  logementList: Logement[] = LOGEMENTS;

  constructor(private router:Router){}

  goToLogement(logement:Logement){
    this.router.navigate(['/logement',logement.id]);
  }

}
