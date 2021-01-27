import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ApiService } from './services/api-service.service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import {BirthYearValidatorDirective} from './questionnaire/Date.Validator'

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    BirthYearValidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
