import { Observable } from 'rxjs/Observable'
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  no_bil = 0 ;
  totalAmnt = 0;
    url1:string='http://localhost:3000/bills_in_mnth';
    url2:string='http://localhost:3000/web/amount_in_mnth';
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getno_bil();
    this.getTtlAmnt;
  }
  getno_bil(){
    console.log("Getting No of bill viewed");
    try {
      this.getServno_bil()
        .subscribe((res: Response) => {
          console.log(res);
         this.no_bil =res["no_of_bills"];
         
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  getServno_bil():Observable<any>{
     
    return this.http.get(this.url1);
    
  }
  getServTtlAmnt():Observable<any>{
     
    return this.http.get(this.url2);
    
  }
  getTtlAmnt(){
    console.log("Getting total Amount disbursed");
    try {
      this.getServTtlAmnt()
        .subscribe((res: Response) => {
          console.log(res);
         this.totalAmnt =res["no_of_bills"];
         
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }

}