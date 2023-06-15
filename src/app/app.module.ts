import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MainComponent } from './components/main/main.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { LastSevenDaysComponent } from './components/last-seven-days/last-seven-days.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FirstSectionComponent,
    InfoCardComponent,
    MainComponent,
    CardHeaderComponent,
    CardsComponent,
    CardLineComponent,
    LastSevenDaysComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
