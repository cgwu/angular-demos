import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
 
  @Input() article: Article;  // 从父组件传进来
  @Input() index: number;

  @Output() putRingOnIt: EventEmitter<string>; // 事件产生器，发送到父组件

  constructor() {
    this.putRingOnIt = new EventEmitter();
    this.article = new Article('Angular 2', 'http://angular.io',3);
    this.index = 0;
  }

  voteUp() {
    // this.article.votes += 1;
    this.article.voteUp();
    this.putRingOnIt.emit(this.article.title + ' thumbs up');
    return false;
  }

  voteDown() {
    // this.article.votes -= 1;
    this.article.voteDown();
    this.putRingOnIt.emit(this.article.title + ' thumbs down');
    return false;
  }

  isOddRow():boolean {
    return this.index % 2 == 1;
  }

  ngOnInit() {
  }

}
