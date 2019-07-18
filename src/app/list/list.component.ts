import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: '[app-list]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  elements: any = [];
  headElements = ['Nome', 'Quantidade', 'Unidade', 'Preço', 'Perecível', 'Fabricação', 'Validade'];
  constructor() { 
  }

  ngOnInit() {
  }

}
