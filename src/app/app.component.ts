import { Component,OnInit } from '@angular/core';
import { LOGEMENTS } from './mock-logement-list';
import { Logement } from './logement';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./styless.css']

})

export class AppComponent{}
/*    logementList: Logement[] = LOGEMENTS;
   logementSelected : Logement[]|undefined; */

/*    selectLogement(ville: string) {
    const logementsFiltres: Logement[] = this.logementList.filter(logement => logement.location === ville);
  
    if (logementsFiltres.length > 0) {
      console.log(`Vous avez demandé les logements pour la ville ${ville}`);
      this.logementSelected = logementsFiltres;
    } 
    else {
      console.log(`Aucun logement trouvé pour la ville ${ville}`);
      this.logementSelected = undefined;
    }
  } */



 