import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciosejdComponent } from './iniciosejd.component';

describe('IniciosejdComponent', () => {
  let component: IniciosejdComponent;
  let fixture: ComponentFixture<IniciosejdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciosejdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciosejdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
