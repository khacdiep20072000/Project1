import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFileComponent } from './pages/add-file/add-file.component';
import { ListFileComponent } from './pages/list-file/list-file.component';
import { ViewFileComponent } from './pages/view-file/view-file.component';
import { DeleteFileComponent } from './pages/delete-file/delete-file.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFileComponent,
    ListFileComponent,
    ViewFileComponent,
    DeleteFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
