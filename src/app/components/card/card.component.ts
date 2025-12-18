import {Component, Input} from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {hugeLink03} from "@ng-icons/huge-icons";
import {Work} from "../../home/my-works/work";

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
        NgIcon
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    viewProviders: [
        provideIcons({hugeLink03}),
    ],
})
export class CardComponent {
    @Input({ required: true }) myWorks: Work[] = [];
}
