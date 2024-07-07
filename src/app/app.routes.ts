import { Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';

export const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'hello', component: HelloWorldComponent}
];
