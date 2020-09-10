import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.page.html",
  styleUrls: ["./article.page.scss"],
})
export class ArticlePage implements OnInit {
  article: any = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const issueId = this.route.snapshot.paramMap.get("issueId");
    const articleId = this.route.snapshot.paramMap.get("articleId");

    if (this.route.snapshot.data["data"]) {
      const data = this.route.snapshot.data["data"];
      const issue = data.issues.find((issue) => issue.id == issueId);
      this.article = issue.articles.find((article) => article.id == articleId);
      if (!this.article) {
        this.article = issue.ads.find((article) => article.id == articleId);
      }
    }
  }
}
