import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-dream-app';
  name = "Álvaro Raúl Quispe Condori";
  email = "aquispecondo@unsa.edu.pe";
  webpage = "https://github.com/ALVARO-QUISPE-UNSA";
}
