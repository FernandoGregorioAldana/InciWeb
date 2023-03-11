import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciojdComponent } from './iniciojd.component';

describe('IniciojdComponent', () => {
  let component: IniciojdComponent;
  let fixture: ComponentFixture<IniciojdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciojdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciojdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
