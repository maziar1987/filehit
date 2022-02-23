import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FstProjectComponent } from './fst-project/fst-project.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project', component: FstProjectComponent },
  { path: 'project/:id', component: FstProjectComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
