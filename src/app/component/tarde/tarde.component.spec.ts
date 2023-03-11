import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TardeComponent } from './tarde.component';

describe('TardeComponent', () => {
  let component: TardeComponent;
  let fixture: ComponentFixture<TardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TardeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
