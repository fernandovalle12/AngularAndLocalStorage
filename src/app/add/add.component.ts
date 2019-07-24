import { Component, OnInit } from "@angular/core";
import { Data } from '@angular/router';
import { AllPostsService } from '../services/all-posts.service';
import { PercentPipe } from '@angular/common';

@Component({
  selector: "[app-add]",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  public perecivel: boolean = false; 
  data = [];
  selectedData: Data = {
    name: '',
    medida: '',
    price: '',
    perecive: '',
    datafab: ''
  };
  theNumber: number = 0;
  constructor(private allPostsService: AllPostsService) {}
  
  ngOnInit() {
    this.data = this.allPostsService.getData();
    this.getNumber();
  } 

  isPerecivel(){
    this.perecivel = true;
  }

  getNumber() {
    this.data.forEach(element => {
      this.theNumber++;
      let uniqueNumber = this.theNumber;
      element.uniqueNumber = uniqueNumber;
    });
  }

  mvalor(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d)(\d{8})$/,"$1.$2");
    v=v.replace(/(\d)(\d{5})$/,"$1.$2");
	
    v=v.replace(/(\d)(\d{2})$/,"$1,$2");
    return v;
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

  onSubmitQuote(thePost: Data){
    this.data.unshift(thePost);
    localStorage.setItem(
      'data',
      JSON.stringify(this.data)
    );
    this.theNumber = 0;
    this.getNumber();
  }
}
