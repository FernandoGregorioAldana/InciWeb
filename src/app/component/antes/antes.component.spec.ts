import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntesComponent } from './antes.component';

describe('AntesComponent', () => {
  let component: AntesComponent;
  let fixture: ComponentFixture<AntesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
