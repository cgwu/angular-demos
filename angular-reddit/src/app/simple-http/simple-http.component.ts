import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ArticleEx } from '../article/article.model';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {

  data:Object;
  loading: boolean;

  constructor(private http: Http) { }

  makeRequest():void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
    .subscribe((res: Response)=>{
      this.data = res.json();
      this.loading = false;
    });
  }

  makePost():void {
    this.loading = true;
    this.http.request(
      'http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({body: 'bar', title:'foo', userId: 1})
    )
    .subscribe((res: Response)=>{
      this.data = res.json();
      this.loading = false;
    });
  }

  makeDelete():void {
    this.loading = true;
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
    .subscribe((res: Response)=>{
      this.data = res.json();
      this.loading = false;
    });
  }

  makeHeaders():void {
    const headers: Headers = new Headers();
    // Headers starting with an X- are typically reserved for nonstandard usage
    // i.e no future standard will introduce a header starting with X- .
    headers.append('X-API-TOKEN', 'ng-book'); 

    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.loading = true;
    this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
    .subscribe((res: Response)=>{
      this.data = res.json();
      this.loading = false;
    });
  }

  testDefaultSyntax() {
    // let obj;
    // let obj = null;
    // let obj = undefined;
    // let obj = {};
    // let obj = {title:'西游记'};
    let obj = {title:'西游记',link:"http://www.baidu.com/", foo:'bar'};
    let a1 = new ArticleEx(obj);
    console.log(a1);
  }
  ngOnInit() {
  }

}
