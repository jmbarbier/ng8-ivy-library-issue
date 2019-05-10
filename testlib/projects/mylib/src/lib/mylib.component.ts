import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-mylib',
  template: `
    <p *ngIf="works">
      mylib works!
    </p>
    <p *ngIf="!works">
      i should not be displayed
    </p>
    <p>mylib present</p>
  `,
  styles: []
})
export class MylibComponent implements OnInit {
  works = true;
  constructor() { }

  ngOnInit() {
  }

}
