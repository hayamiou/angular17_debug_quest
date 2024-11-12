import { Component } from '@angular/core';
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'] // Correction : styleUrl devient styleUrls
})
export class ContactPageComponent {

}
