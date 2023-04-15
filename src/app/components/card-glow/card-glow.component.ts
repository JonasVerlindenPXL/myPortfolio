import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-glow',
  templateUrl: './card-glow.component.html',
  styleUrls: ['./card-glow.component.css']
})
export class CardGlowComponent {
  @Input() height: string = '60';
}
