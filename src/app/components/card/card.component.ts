import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {hugeLink03} from "@ng-icons/huge-icons";

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
        NgOptimizedImage,
        NgIcon
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    viewProviders: [
        provideIcons({hugeLink03}),
    ],
})
export class CardComponent {

}
