import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
 // Atributo para recibir el título (string)
 @Input() title!: string;

 // Atributo para recibir la URL de la imagen
 @Input() imgSrc!: string;

}
