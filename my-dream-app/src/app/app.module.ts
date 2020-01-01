import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    SummaryPipe,
    HighlightDirective,
    FormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
