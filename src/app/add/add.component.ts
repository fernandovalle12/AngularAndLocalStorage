import { Component, OnInit } from "@angular/core";
import { Data } from '@angular/router';
import { AllPostsService } from '../all-posts.service';

@Component({
  selector: "[app-add]",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  data = [];
  selectedData: Data = {
    name: '',
    medida: '',
    price: '',
    datafab: ''
  };
  theNumber: number = 0;
  constructor(private allPostsService: AllPostsService) {}
  
  ngOnInit() {
    this.data = this.allPostsService.getData();
    this.getNumber();
  } 

  getNumber() {
    this.data.forEach(element => {
      this.theNumber++;
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
