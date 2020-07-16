import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../model/post';
import { Posts } from '../../model/posts';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  focus: any;
  focus1: any;
  public posts: Post[] = [];

  private _jsonURL = 'assets/blog/blog.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      data.posts.forEach(element => {
        this.posts.push(element);
        console.log(element);
      });
    });
  }

  public getJSON(): Observable<Posts> {
    return this.http.get<Posts>(this._jsonURL);
  }

  ngOnInit() {}

}
