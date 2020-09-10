import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ResolverService } from "./resolver.service";

const routes: Routes = [
  {
    path: "home",
    resolve: {
      data: ResolverService,
    },
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "article/:articleId",
    resolve: {
      data: ResolverService,
    },
    loadChildren: () =>
      import("./article/article.module").then((m) => m.ArticlePageModule),
  },
  {
    path: "issue/:issueId",
    resolve: {
      data: ResolverService,
    },
    loadChildren: () =>
      import("./issue/issue.module").then((m) => m.IssuePageModule),
  },

  {
    path: "issue/:issueId/:articleId",
    resolve: {
      data: ResolverService,
    },
    loadChildren: () =>
      import("./article/article.module").then((m) => m.ArticlePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
