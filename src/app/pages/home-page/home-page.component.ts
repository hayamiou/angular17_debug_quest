import { Component } from '@angular/core';
import { ArticleListComponent } from "../../components/article-list/article-list.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleListComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'] // Correction : utilisation de styleUrls au pluriel
})
export class HomePageComponent {

}
