import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseComponent } from './courses/course/course.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SearchPipe } from '../shared/filter/search.pipe';
import { ProgressSpinnerComponent } from '../shared/progress-spinner/progress-spinner.component';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseComponent,
    NavbarComponent,
    SearchPipe,
    ProgressSpinnerComponent,
    DialogComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [CourseListComponent, 
    CourseComponent,
    NavbarComponent,
    SearchPipe,
    ProgressSpinnerComponent,
    DialogComponent,
    AddCourseComponent]
})
export class CoreModule { }
