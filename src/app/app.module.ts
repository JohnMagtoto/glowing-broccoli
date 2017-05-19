import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TimefaceComponent } from './timeface/timeface.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    TimefaceComponent,
    ControlpanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
