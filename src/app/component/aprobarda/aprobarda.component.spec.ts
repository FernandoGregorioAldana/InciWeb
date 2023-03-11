import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobardaComponent } from './aprobarda.component';

describe('AprobardaComponent', () => {
  let component: AprobardaComponent;
  let fixture: ComponentFixture<AprobardaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobardaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobardaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
