import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show:boolean = false;
  public showall:boolean = false;
  title = 'DesafioSenior';

  ngOnInit (){}
  insert(){
    this.show = !this.show;
  }
  list(){
    this.showall = !this.showall;
  }

}
