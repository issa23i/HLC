import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

ngOnInit(): void {
  let numero = 10;
  debugger;
  numero=20;
  numero = numero * 2;
  numero = 0;
  console.log(numero);
}
}


