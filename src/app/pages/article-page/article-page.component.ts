import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-page',
  standalone: true,
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article$!: Observable<Article>; // Observable pour un article

  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.article$ = this.apiService.getArticleById(id); // Utilise le service pour récupérer l'article
  }
}
