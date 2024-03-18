import { Component } from '@angular/core';

interface InvoiceItem {
  item: string;
  hours: number;
  hourlyRate: number;
}

interface InvoiceData {
  name: string;
  address: string;
  city: string;
  code: string;
  date: Date;
  tjItems: InvoiceItem[];
  paymentType: string[];
  taxAmount: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoice-emoji';
  tjInvoiceData: InvoiceData;
  selectedPaymentType: string = '';
  newInvoiceItem: InvoiceItem = {
    item: '',
    hours: 0,
    hourlyRate: 0
  };

  constructor() {
    this.tjInvoiceData = {
      name: "Tuck Company Inc.",
      address: "289 Springfield Crescent.",
      city: "Toronto, ON M2P 6A9",
      code: "12345678",
      date: new Date(),
      tjItems: [
        { item: 'Web Design', hours: 20, hourlyRate: 50 },
        { item: 'Web Development', hours: 100, hourlyRate: 75 },
        { item: 'Project Management', hours: 12, hourlyRate: 55.30 }
      ],
      paymentType: ['Credit Card', 'Bitcoin', 'Cash', 'Interac'],
      taxAmount: 0.13
    };
  }

  tjAddInvoiceToTable(): void {
    if (this.newInvoiceItem.item && this.newInvoiceItem.hours && this.newInvoiceItem.hourlyRate) {
      this.tjInvoiceData.tjItems.push({ ...this.newInvoiceItem });
      // Clear the input fields
      this.newInvoiceItem = {
        item: '',
        hours: 0,
        hourlyRate: 0
      };
    }
  }

  onAddNewItem(newItem: InvoiceItem): void {
    this.newInvoiceItem = newItem;
    this.tjAddInvoiceToTable();
  }

  getTotalHours(): number {
    return this.tjInvoiceData.tjItems.reduce((total, item) => total + item.hours, 0);
  }
  getTotalSum(): number {
    let sum = 0;
    this.tjInvoiceData.tjItems.forEach(item => {
      sum += item.hours;
    });
    return sum;
  }
}
