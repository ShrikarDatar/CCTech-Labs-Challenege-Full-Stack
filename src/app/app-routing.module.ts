import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { UploadImageComponent} from './upload-image/upload-image.component';

const routes: Routes = [{
  path: '',
    children: [
       { path: '', pathMatch: 'full', redirectTo: 'upload-image'},
      { path: 'upload-image', component: UploadImageComponent, data: { breadcrumb: 'Upload Image'}},
    ]
  }];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {scrollPositionRestoration: 'top',onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
