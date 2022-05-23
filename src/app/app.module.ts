import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { SearchComponent } from './pages/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleSearchService } from './service/google-search.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    SearchComponent,
    HomeBodyComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GoogleSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
