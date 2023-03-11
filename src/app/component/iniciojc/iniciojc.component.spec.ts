import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciojcComponent } from './iniciojc.component';

describe('IniciojcComponent', () => {
  let component: IniciojcComponent;
  let fixture: ComponentFixture<IniciojcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciojcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciojcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
