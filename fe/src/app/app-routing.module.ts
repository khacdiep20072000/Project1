import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddFileComponent } from './pages/add-file/add-file.component';
import { ListFileComponent } from './pages/list-file/list-file.component';
import { ViewFileComponent } from './pages/view-file/view-file.component';
import { DeleteFileComponent } from './pages/delete-file/delete-file.component';

const routes: Routes = [
  {
    path: 'add-file',
    component: AddFileComponent,
  },
  {
    path: 'list-file',
    component: ListFileComponent,
  },
  {
    path: 'detail-file/:id',
    component: ViewFileComponent,
  },
  {
    path: 'delete-file/:id',
    component: DeleteFileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
