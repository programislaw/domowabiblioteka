import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../model/post';
declare var showDiv: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private _post = null;
  toggleName: string;
  isShown = false;
  content: string;

  @Input()
  set post(post: Post) {
    if (this._post == null) {
      this.content = post.content.substring(0, 100) + '...';
      this.toggleName = 'Więcej';
    }
    this._post = post;
  }

  get post(): Post { return this._post; }


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  toggle() {
    if (this.isShown) {
      this.isShown = false;
      this.content = this.content.substring(0, 100) + '...';
      this.toggleName = 'Więcej';
    } else {
      this.isShown = true;
      this.content = this.post.content;
      this.toggleName = 'Zwiń';
    }
  }

}
