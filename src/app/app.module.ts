import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeekContainerComponent } from './week-container/week-container.component';
import { FixtureContainerComponent } from './fixture-container/fixture-container.component';
import { FixtureDialogComponent } from './fixture-dialog/fixture-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekContainerComponent,
    FixtureContainerComponent,
    FixtureDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
