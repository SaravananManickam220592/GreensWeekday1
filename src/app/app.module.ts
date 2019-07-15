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

@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent,
    FruitsComponent,
    InstalikeComponent,
    CardComponent,
    CapitalizePipe,
    CustomPipe,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
