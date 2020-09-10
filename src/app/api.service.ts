import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public data: any = null;
  public loading: boolean = true;

  constructor(private http: HttpClient) {}

  private async fetchData() {
    return this.http
      .get(`${environment.api}/api/1/issues`, {})
      .toPromise()
      .then((data) => {
        console.log(data);
        this.data = data;
        this.loading = false;
      })
      .catch((error) => {
        this.data = error;
        console.log(error);
      });
  }

  public async getData() {
    if (!this.data) {
      await this.fetchData();
    }
    return this.data;
  }

  getArticle(id) {
    //return this.data
  }

  getRandomArticle() {}

  // filterData(issueId: number) {
  //   return this.data.filter()
  // }
}
