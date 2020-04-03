import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPipe } from './filter/search.pipe';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { DialogComponent } from './dialog/dialog.component';
import { MessageService } from 'primeng/api';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    NavbarComponent,
    SearchPipe,
    ProgressSpinnerComponent,
    DialogComponent    
  ],
  imports: [
    BrowserModule,
    ProgressSpinnerModule
  ],
  providers: [MessageService],
  exports: [
    NavbarComponent,
    SearchPipe,
    ProgressSpinnerComponent,
    DialogComponent]
})
export class SharedModule { }
