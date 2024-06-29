import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HelloWorldComponent} from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HelloWorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = ['Ryan', 'Joe', 'Cameron', 'Jhon'];
  activated = false;
  title = 'my-dream-app';
  name : string;
  email;
  webpage : string;
  hobbies : string[];
  showHobbies: boolean;
  constructor() {
    console.log("constructor trabajando...");
    this.name = "Álvaro Raúl Quispe Condori";
    this.email = "aquispecondo@unsa.edu.pe";
    this.webpage = "https://github.com/ALVARO-QUISPE-UNSA";
    this.hobbies = ["P competitiva", "Política", "Ejercicios"]
    this.showHobbies = false;
  }
  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby : HTMLInputElement) {
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }
}
