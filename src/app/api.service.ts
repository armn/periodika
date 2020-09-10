import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public async getArticles() {
    return this.http
      .get(`${environment.api}/api/1/issues`, {})
      .toPromise()
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
