import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { HomeComponent } from './modules/home/home.component';


const routes: Routes = [
  {path : '', component: HomeComponent},

  {path : 'addnew', component: AddNewComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
