import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { InvoiceformComponent } from './invoiceform/invoiceform.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    InvoiceformComponent,
    PaymentComponent,
    InvoiceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
