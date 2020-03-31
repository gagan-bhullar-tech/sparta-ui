import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-spinner',
  template: `
    <p-progressSpinner></p-progressSpinner>
  `,
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
