import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../models/article.model';
import { DatePipe, CommonModule } from '@angular/common'; // Ajout de CommonModule pour utiliser ngClass
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [
    CommonModule, // Ajout de CommonModule pour les directives comme ngClass
    DatePipe,
    RouterLink
  ],
  templateUrl: './article-thumbnail.component.html',
  styleUrls: ['./article-thumbnail.component.scss'] // Correction : styleUrl doit être au pluriel styleUrls
})
export class ArticleThumbnailComponent {
  @Input() article!: Article; // Correction : ajout de @Input() pour recevoir l'article du composant parent
  @Output() notifyLike = new EventEmitter<Article>(); // Correction : @Output() et EventEmitter<Article> pour émettre l'article

  sendNotification() {
    this.notifyLike.emit(this.article); // Correction : utilisation de emit() pour émettre l'événement
  }
}
