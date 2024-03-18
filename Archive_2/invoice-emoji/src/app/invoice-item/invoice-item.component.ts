import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.scss']
})
export class InvoiceItemComponent {
  @Input() item: string = '';
  @Input() hours: number = 0;
  @Input() hourlyRate: number = 0;

  constructor() { }
}
