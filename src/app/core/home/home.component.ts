import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showLoader: boolean;
  showSideBar: boolean = false;
  faPlusCircle = faPlusCircle;

  constructor() { }

  ngOnInit(): void {
  }

  addCourse() {
    this.showSideBar = true;
  }

  resetSideBar() {
    this.showSideBar = false;
  }

}
