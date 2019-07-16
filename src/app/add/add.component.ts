import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[app-add]",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  tipo_template = '';
  constructor() {}
  
  ngOnInit() {}
  changeTipoTemplate(tipo) {
    this.tipo_template = tipo;
  }
}
