import { Component } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  data: any = null;
  loading: boolean = true;

  constructor(private api: ApiService, private router: Router) {
    this.api.getArticles().then((response) => {
      this.data = response;
      this.loading = false;
    });
  }

  openIssue(issue: any): void {
    this.router.navigate(["/issue"], { state: { data: { ...issue } } });
  }
}
