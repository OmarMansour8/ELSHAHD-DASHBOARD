import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// We'll import components in the next step
const routes: Routes = [
  // We'll add routes here step by step
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }