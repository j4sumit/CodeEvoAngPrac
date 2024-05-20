import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-first-comp',
  // selector : '.app-first-comp',
  selector:'[app-first-comp]',
  // templateUrl: './first-comp.component.html',
  template: `
  <h1>hello</h1>
  <h2>second line</h2>
  `,
  // styleUrls: ['./first-comp.component.css']
styles:[`h1{color:red}
h2{color:blue}`]
})
export class FirstCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
