import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from './article/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  private currentArticle: Article;

  @Output() onArticleSelected: EventEmitter<Article>;

  constructor(private router: Router) {
    this.onArticleSelected = new EventEmitter();
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
    this.currentArticle = this.articles[0];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Add article title: ${title.value}  and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles() {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  ringWasPlaced(message: string) {
    console.log(`事件产生: ${message}`);
  }

  clicked(article: Article) {
    this.currentArticle = article;
    this.onArticleSelected.emit(article);
    console.log(`设置当前文章: ${article.title}`);
  }

  isSelected(article: Article) {
    if (!article || !this.currentArticle) return false;
    return this.currentArticle.title === article.title;
  }

}
