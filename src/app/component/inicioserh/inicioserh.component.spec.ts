import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioserhComponent } from './inicioserh.component';

describe('InicioserhComponent', () => {
  let component: InicioserhComponent;
  let fixture: ComponentFixture<InicioserhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioserhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioserhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
