import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  data: any = null;
  //  loading: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.route.snapshot.data["data"]) {
      this.data = this.route.snapshot.data["data"];
    }
  }

  openIssue(issue: any): void {
    this.router.navigate([`/issue/${issue.id}`]);
  }

  randomIssue() {}
}
