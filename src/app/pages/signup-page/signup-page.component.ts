import { Component } from '@angular/core';
import {SignupFormComponent} from "../../components/signup-form/signup-form.component";

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [SignupFormComponent], // Ajout de SignupFormComponent dans les imports
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'] // Correction : styleUrl doit être au pluriel styleUrls
})
export class SignupPageComponent {

}
