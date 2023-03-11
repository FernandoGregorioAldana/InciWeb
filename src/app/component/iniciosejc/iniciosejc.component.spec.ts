import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciosejcComponent } from './iniciosejc.component';

describe('IniciosejcComponent', () => {
  let component: IniciosejcComponent;
  let fixture: ComponentFixture<IniciosejcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciosejcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciosejcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
