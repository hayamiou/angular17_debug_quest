import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // Ajout de NgForm pour la gestion du formulaire
import { CommonModule } from '@angular/common';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'] // Correction : styleUrl en styleUrls pour la syntaxe Angular
})
export class ContactFormComponent {

  newMessage: Message = {
    lastname: "",
    firstname: "",
    email: "",
    content: ""
  };

  onSubmit(form: NgForm): void { // Ajout de NgForm en paramètre pour accéder au formulaire
    console.log(this.newMessage); // Utilisation de this.newMessage pour accéder aux données
  }
}
