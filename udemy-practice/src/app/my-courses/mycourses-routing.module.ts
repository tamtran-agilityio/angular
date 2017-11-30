import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimarylayoutComponent } from '@app/shared/component/primarylayout/primarylayout.component';
import { MyCoursesComponent } from '@app/my-courses/component/my-courses/my-courses.component';
import { MyCollectionsComponent } from '@app/my-courses/component/my-collections/my-collections.component';
import { MyWishlistComponent } from '@app/my-courses/component/my-wishlist/my-wishlist.component';
import { MyLearnComponent } from '@app/my-courses/component/my-learn/my-learn.component';
import { MyArchivedComponent } from '@app/my-courses/component/my-archived/my-archived.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PrimarylayoutComponent,
    children: [
      {
        path: 'my-courses',
        component: MyCoursesComponent,
        children: [
          {
            path: 'learning',
            component: MyLearnComponent
          },
          {
            path: 'collections',
            component: MyCollectionsComponent
          },
          {
            path: 'wishlist',
            component: MyWishlistComponent,
          },
          {
            path: 'archived',
            component: MyArchivedComponent,
          }
        ]
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class MyCoursesRouting {}
