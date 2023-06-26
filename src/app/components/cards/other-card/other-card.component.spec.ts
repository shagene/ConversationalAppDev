import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCardComponent } from './other-card.component';

describe('OtherCardComponent', () => {
  let component: OtherCardComponent;
  let fixture: ComponentFixture<OtherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
