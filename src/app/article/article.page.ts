import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.page.html",
  styleUrls: ["./article.page.scss"],
})
export class ArticlePage implements OnInit {
  article: any = null;

  constructor(private router: Router) {
    this.article = this.router.getCurrentNavigation().extras?.state?.data;
    console.log(this.article);
  }

  ngOnInit() {}
}
