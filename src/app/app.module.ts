import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AngularSlickgridModule } from 'angular-slickgrid';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularSlickgridModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


