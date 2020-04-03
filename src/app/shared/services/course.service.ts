import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import Course from '../../core/models/course.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoaderService } from './loader.service';

import { environment } from '../../../environments/environment';

@Injectable()
export class CourseService {
  apiCourseUrl: string = environment.url + '/v1/courses';

  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  getCourses(): Observable<Course[]> {
    this.loaderService.display(true);
    return this.http
      .get(this.apiCourseUrl)
      .map((res: any) => {
        console.log('in this', res);
        this.loaderService.display(false);
        return res.json().data.docs.map(item => {
          return new Course(
            item.title,
            item.category,
            item.provider,
            item.description,
            item.startDate,
            item.completeDate,
            item.link,
            item.status,
            item.print
          );
        });
      })
      .catch((err: any) => {
        return throwError(err);
      });
  }

  postCourse(course: Course): Observable<any> {
    return this.http.post(this.apiCourseUrl, course);
  }
}
