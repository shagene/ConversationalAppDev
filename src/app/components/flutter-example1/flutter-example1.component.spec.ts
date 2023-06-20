import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterExample1Component } from './flutter-example1.component';

describe('FlutterExample1Component', () => {
  let component: FlutterExample1Component;
  let fixture: ComponentFixture<FlutterExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlutterExample1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlutterExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
