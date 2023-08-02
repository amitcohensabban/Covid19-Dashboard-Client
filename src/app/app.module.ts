import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
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
import { CardComponent } from './components/card/card.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { TableComponent } from './components/table/table.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { SelectComponent } from './components/select/select.component';
import { SearchComponent } from './components/search/search.component';
import { GraphComponent } from './components/graph/graph.component';
import { NewPatientsDailyComponent } from './components/new-patients-daily/new-patients-daily.component';
import { GradesColorsComponent } from './components/grades-colors/grades-colors.component';
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
    SectionComponent,
    CardComponent,
    CardBodyComponent,
    TableComponent,
    TableHeaderComponent,
    SelectComponent,
    SearchComponent,
    GraphComponent,
    NewPatientsDailyComponent,
    GradesColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
