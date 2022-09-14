import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  checked: boolean = false;
  isSubmited: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSubmited = true;
    if(this.checked){
      this.router.navigateByUrl('/');
    }
  }
}
