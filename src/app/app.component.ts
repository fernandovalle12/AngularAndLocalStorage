import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public show: boolean = false;
  public showall: boolean = false;
  title = "DesafioSenior";

  ngOnInit() {}
  insert() {
    if (this.showall === true) {
      this.showall = false;
      this.show = true;
    } else {
      this.show = !this.show;
    }
  }
  list() {
    if (this.show === true) {
      this.show = false;
      this.showall = true;
    } else {
      this.showall = !this.showall;
    }
  }
}
