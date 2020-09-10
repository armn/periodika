import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-issue",
  templateUrl: "./issue.page.html",
  styleUrls: ["./issue.page.scss"],
})
export class IssuePage implements OnInit {
  issue: any = null;
  viewing: string = "articles";

  constructor(private router: Router) {
    this.issue = this.router.getCurrentNavigation().extras?.state?.data;
  }

  ngOnInit() {
    console.log(this.issue);
  }

  segmentChanged(event: any) {
    this.viewing = event.detail.value;
  }

  viewItem(item: any) {
    this.router.navigate(["/article"], { state: { data: { ...item } } });
  }
}
