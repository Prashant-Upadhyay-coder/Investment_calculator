import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
