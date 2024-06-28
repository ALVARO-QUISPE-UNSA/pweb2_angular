import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email;
  webpage : string;
  hobbies : string[];
  constructor() {
    console.log("constructor trabajando...");
    this.name = "Álvaro Raúl Quispe Condori";
    this.email = "aquispecondo@unsa.edu.pe";
    this.webpage = "https://github.com/ALVARO-QUISPE-UNSA";
    this.hobbies = ["P competitiva", "Política", "Ejercicios"]
  }
  showhobbies() {
    return true;
  }
}
