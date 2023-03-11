import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarjcComponent } from './aprobarjc.component';

describe('AprobarjcComponent', () => {
  let component: AprobarjcComponent;
  let fixture: ComponentFixture<AprobarjcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobarjcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobarjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
