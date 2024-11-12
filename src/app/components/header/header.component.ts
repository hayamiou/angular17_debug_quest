import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Correction : styleUrl doit être styleUrls
})
export class HeaderComponent {

  // Correction : injection de Router via le constructeur
  constructor(private router: Router) {}

  navigateToSignUpPage(): void {
    // Correction : utilisation de navigate() au lieu de navigateTo()
    this.router.navigate(['/signup']); // Syntaxe correcte pour la navigation
  }
}
