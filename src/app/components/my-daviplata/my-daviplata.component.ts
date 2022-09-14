import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-daviplata',
  templateUrl: './my-daviplata.component.html',
  styleUrls: ['./my-daviplata.component.scss']
})
export class MyDaviplataComponent implements OnInit {
  totalPrice: number = 8000000;
  constructor() { }

  ngOnInit(): void {
  }

}
