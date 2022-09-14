import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BadgeModule }  from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { MyDaviplataComponent } from './components/my-daviplata/my-daviplata.component';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputMaskModule } from 'primeng/inputmask';

const UX_Module = [ 
  BadgeModule, ButtonModule, CardModule, CarouselModule, 
  CheckboxModule, FormsModule, ReactiveFormsModule,InputTextModule,
  DropdownModule, InputNumberModule, AutoCompleteModule, InputMaskModule,
] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    BenefitsComponent,
    HomeComponent,
    NavComponent,
    MyDaviplataComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UX_Module,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
