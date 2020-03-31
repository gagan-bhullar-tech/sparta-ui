import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-spinner',
  template: `
    <p-spinner></p-spinner>
  `,
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
