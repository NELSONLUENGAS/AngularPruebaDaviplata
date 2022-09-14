import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDaviplataComponent } from './my-daviplata.component';

describe('MyDaviplataComponent', () => {
  let component: MyDaviplataComponent;
  let fixture: ComponentFixture<MyDaviplataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDaviplataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDaviplataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
