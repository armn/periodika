import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ResolverService implements Resolve<any> {
  constructor(private api: ApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.api.getData();
  }
}
