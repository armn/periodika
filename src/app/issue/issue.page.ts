import { Component, OnInit } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from "@angular/router";

@Component({
  selector: "app-issue",
  templateUrl: "./issue.page.html",
  styleUrls: ["./issue.page.scss"],
})
export class IssuePage implements OnInit {
  issue: any = null;
  viewing: string = "articles";

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const issueId = this.route.snapshot.paramMap.get("issueId");
    if (this.route.snapshot.data["data"]) {
      const data = this.route.snapshot.data["data"];
      this.issue = data.issues.find((issue) => issue.id == issueId);
    }
  }

  segmentChanged(event: any) {
    this.viewing = event.detail.value;
  }

  viewItem(article: any) {
    this.router.navigate([
      `/issue/${this.route.snapshot.paramMap.get("issueId")}/${article.id}`,
    ]);
  }
}
