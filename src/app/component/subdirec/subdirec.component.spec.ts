import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdirecComponent } from './subdirec.component';

describe('SubdirecComponent', () => {
  let component: SubdirecComponent;
  let fixture: ComponentFixture<SubdirecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdirecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubdirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
