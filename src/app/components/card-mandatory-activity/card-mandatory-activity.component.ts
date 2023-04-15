import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-mandatory-activity',
  templateUrl: './card-mandatory-activity.component.html',
  styleUrls: ['./card-mandatory-activity.component.css']
})
export class CardMandatoryActivityComponent {
  @Input() title: string = 'title';
  @Input() domain: string = 'domein';
  @Input() description: string = 'omschrijving';
  @Input() location: string = 'locatie';
  @Input() date: string = 'datum';
}
