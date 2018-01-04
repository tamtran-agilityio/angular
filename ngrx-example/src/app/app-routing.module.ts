import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
