import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ViewClosetComponent } from './components/view-closet/view-closet.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'items/:id', component: ItemDetailsComponent
  },
  {
    path: 'closets/:id', component: ViewClosetComponent
  },
  {
    path: 'items', component: AddItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
