import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';

const ROUTES: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule ({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})

export class AboutModule {}
