import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoComponent } from './economico.component';

describe('EconomicoComponent', () => {
  let component: EconomicoComponent;
  let fixture: ComponentFixture<EconomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
