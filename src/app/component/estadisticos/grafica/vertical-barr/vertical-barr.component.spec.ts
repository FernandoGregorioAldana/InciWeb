import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBarrComponent } from './vertical-barr.component';

describe('VerticalBarrComponent', () => {
  let component: VerticalBarrComponent;
  let fixture: ComponentFixture<VerticalBarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalBarrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalBarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
