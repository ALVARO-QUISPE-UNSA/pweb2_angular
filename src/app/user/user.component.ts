import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  @Input() nameUser:string = '';
  constructor() {}
  ngOnInit(): void {
    console.log(`El nombre del usuario es: ${this.nameUser}`);
  }
  sayhello(nameUser:string) {
    alert("Hola " + nameUser);
  }
}
