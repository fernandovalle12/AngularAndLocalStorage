import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllPostsService {
  data = [];
  constructor() {
    this.getData();
  }
  getData() {
    if (localStorage.getItem('data') === null) {
      this.data = [];
    } else {
      this.data = JSON.parse(
        localStorage.getItem('data')
      );
    }
    return this.data;
  }
}
