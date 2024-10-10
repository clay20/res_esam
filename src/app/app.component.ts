import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './page/hijo/hijo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title:string[]=['Perfil Personal','REgistro de Programas','Docentes','Postulantes','Programas','Certificacion Docentes'];


  // URL de la imagen (string)
  public imageUrl: string[] = ['perfil.png','registro.png','docentes.png','postulante.png','programas.png','certificaones.png'];


}
