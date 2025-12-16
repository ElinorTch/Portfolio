import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import {MyWorksComponent} from "./my-works/my-works.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        NavbarComponent,
        HeaderComponent,
        SocialComponent,
        ExperiencesComponent,
        MyWorksComponent,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
