import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';




@Component({
  selector: 'app-test',
  template: `
      <input type="date" #box (keyup)="0">
      <p res>{{ formatDate(box.value) }}</p>
      <p res>{{ formatDate(box.value) }}</p>
      <p res>{{ formatDate(box.value) }}</p>
      <p res>{{ formatDate(box.value) }}</p>



  `
})
export class TestComponent {
  formatDate(value: string): string {
    const parts = value.split('-');
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    return formattedDate;
  }
}