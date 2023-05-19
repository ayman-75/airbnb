import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LOGEMENTS } from '../mock-logement-list';
import { Logement } from '../logement';
@Component({
  selector: 'app-detail-logement',
  templateUrl: './detail-logement.component.html',
  styleUrls: ['./detail-logement.component.css']
})
export class DetailLogementComponent implements OnInit {

  logementList: Logement[];
  logement: Logement|undefined;

  constructor(private route: ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.logementList = LOGEMENTS;
    const logementId: string|null = this.route.snapshot.paramMap.get('id');
    
    if(logementId){
      this.logement = this.logementList.find(logement=> logement?.id == +logementId)
    }

  }

  goToLogementLIst(){
    this.router.navigate(['/logements']);
  }
}
