import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { Input1Component } from './input1.component';

describe('Input1Component', () => {
  let component: Input1Component;
  let fixture: ComponentFixture<Input1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Input1Component],
      imports: [BrowserAnimationsModule, MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Input1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct placeholder text', () => {
    component.placeholder = 'Test placeholder';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-label').textContent).toContain('Test placeholder');
  });

  it('should display datepicker when useDatepicker is true', () => {
    component.useDatepicker = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-datepicker-toggle')).toBeTruthy();
  });

  it('should not display datepicker when useDatepicker is false', () => {
    component.useDatepicker = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-datepicker-toggle')).toBeFalsy();
  });
});
