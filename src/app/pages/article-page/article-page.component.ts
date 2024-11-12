import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [],
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'] // Correction : styleUrl en styleUrls
})
export class ArticlePageComponent implements OnInit { // Ajout de OnInit pour ngOnInit
  articleId!: number;

  // Correction : utilisation d'un constructeur pour injecter ActivatedRoute
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
  }
}
