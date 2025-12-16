import { Component } from '@angular/core';
import {CardComponent} from "../../components/card/card.component";

@Component({
  selector: 'app-my-works',
  standalone: true,
    imports: [
        CardComponent
    ],
  templateUrl: './my-works.component.html',
  styleUrl: './my-works.component.scss'
})
export class MyWorksComponent {

}
