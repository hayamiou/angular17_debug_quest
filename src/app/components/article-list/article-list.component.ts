import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles$!: Observable<Article[]>; // Observable pour les articles

  private apiService = inject(ApiService);

  ngOnInit() {
    this.articles$ = this.apiService.getArticles(); // Utilise le service pour récupérer les articles
  }
}
