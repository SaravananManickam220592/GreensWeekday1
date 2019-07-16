import { DebitCardDirective } from './debitcard.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { InstalikeComponent } from './instalike/instalike.component';
import { CardComponent } from './card/card.component';
import { GroceryComponent } from './grocery/grocery.component';

import { CapitalizePipe } from './capitalize.pipe';
import { CustomPipe } from './custom.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent,
    FruitsComponent,
    InstalikeComponent,
    CardComponent,
    CapitalizePipe,
    CustomPipe,
    DirectivesComponent,
    DebitcardComponent,
    DebitCardDirective,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
