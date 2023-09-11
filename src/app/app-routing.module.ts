import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedDataComponent } from './saved-data/saved-data.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {MapComponent} from './map/map.component';

const routes: Routes = [
  {path:'', component:TopheadingComponent},   //home
  {path:'saved', component:SavedDataComponent},   //saved data
  {path:'map', component:MapComponent},   //map
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
