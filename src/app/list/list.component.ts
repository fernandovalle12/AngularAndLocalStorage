import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: '[app-list]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  elements: any = [];
  theNumber: number = 0;
  data = [];
  selectedData: Data = {
    name: '',
    qtde: '',
    medida: '',
    price: '',
    perecivel: '',
    datafab: '',
    dataval: ''
  }
  headElements = ['Nome', 'Quantidade', 'Unidade', 'Preço', 'Perecível', 'Fabricação', 'Validade'];
  constructor() { 
  }

  ngOnInit() {
  }

  getNumber() {
    this.data.forEach(element => {
      this.theNumber;
      let uniqueNumber = this.theNumber;
      element.uniqueNumber = uniqueNumber;
    });
  }

  getData(){
    if (localStorage.getItem('data') === null){
      this.data = [];
    } else {
      this.data = JSON.parse(
        localStorage.getItem('data')
      )
    }
  }
  deletaData(thePost: Data) {
    if (confirm('Tem certeza que deseja deletar?')) {
      this.data.forEach((current, index) => {
        if (thePost.data === current.data) {
          this.data.splice(index, 1);
        }
      });
    }
    localStorage.setItem(
      'data',
      JSON.stringify(this.data)
    );
    this.theNumber = 0;
    this.getNumber();
  }

}
