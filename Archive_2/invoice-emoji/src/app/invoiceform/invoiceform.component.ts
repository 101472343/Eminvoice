import { Component, Output, EventEmitter } from '@angular/core';

interface InvoiceItem {
  item: string;
  hours: number;
  hourlyRate: number;
}

@Component({
  selector: 'app-invoiceform',
  templateUrl: './invoiceform.component.html',
  styleUrls: ['./invoiceform.component.scss']
})
export class InvoiceformComponent {
  @Output() tjAddNewItem: EventEmitter<InvoiceItem> = new EventEmitter<InvoiceItem>();

  tjItemTransac: string = '';
  tjHourTransac: number = 0;
  tjRateTransac: number = 0;

  constructor() { }

  tjAddInvoice(): void {
    const newItem: InvoiceItem = {
      item: this.tjItemTransac,
      hours: this.tjHourTransac,
      hourlyRate: this.tjRateTransac
    };
    this.tjAddNewItem.emit(newItem);
    // Clear the input fields
    this.tjItemTransac = '';
    this.tjHourTransac = 0;
    this.tjRateTransac = 0;
  }
}
