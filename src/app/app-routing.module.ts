import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLogementComponent } from './list-logement/list-logement.component';
import { DetailLogementComponent } from './detail-logement/detail-logement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'logements',component: ListLogementComponent},
  {path:'logement/:id',component: DetailLogementComponent},
  {path:'',redirectTo:'logements',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
