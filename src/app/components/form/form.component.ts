import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cities } from 'src/app/models/cities';
import { cities } from 'src/data/data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  documentTypes: object[];
  formMyDaviplata: FormGroup;
  isSubmitted: boolean = false;
  filteredCountries: Cities[];
  countriesAndTowns: Cities[] = cities;
  addressTypes: object[];


  constructor(private formBuilder: FormBuilder, private router: Router,) { 
    this.documentTypes = [
      {name: "Cédula de ciudadanía"},
      {name: "Tarjeta de identidad"},
      {name: "Cédula de extrajería"},
    ]
    this.addressTypes = [
      {name: 'Autopista'},
      {name: 'Avenida'},
      {name: 'Av. Calle'},
      {name: 'Av. Carretera'},
      {name: 'Calle'},
      {name: 'Carrera'},
      {name: 'Diagonal'},
      {name: 'Circunvalar'},
    ]
  }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(){
    this.formMyDaviplata = this.formBuilder.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      docNumber: ['', Validators.required],
      city: ['', Validators.required],
      addressType: ['', Validators.required],
      number: ['', Validators.required],
      number1: ['', Validators.required],
      number2: ['', Validators.required],
      option: [''],
      phone: ['', Validators.required],
    })
  }

  get form() {
    return this.formMyDaviplata.controls;
  }

  filterCountry(event: any){
    const value = event.query;
    this.filteredCountries = this.countriesAndTowns.filter( country => country.name.toLowerCase().includes(value.toLowerCase()))
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.formMyDaviplata.invalid || this.form['phone'].value[0] !== '3') return;
    this.router.navigateByUrl('/');
  }
}
