import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {UserComponent} from './user/user.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    HelloWorldComponent, 
    UserComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
users = ['Ryan', 'Joe', 'Cameron', 'Jhon'];
activated = false;
title = 'my-dream-app';
name : string;
age: number;
email;
webpage : string;
hobbies : string[];
showHobbies: boolean;
posts: any[] = [];
constructor(private dataService: DataService) {
  console.log("constructor trabajando...");
  this.dataService.getData().subscribe(( data) => {
    //console.log(data);
    this.posts = data;
  });
  this.age = 18;
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
sayhello() {
  alert("Hola desde app.component");
}
deleteUser(user:string) {
  for (let i = 0; i < this.users.length; i++) {
    if (user==this.users[i]) {
      this.users.splice(i, 1);
    }
  }
}
addUser(newUser:HTMLInputElement) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
}
