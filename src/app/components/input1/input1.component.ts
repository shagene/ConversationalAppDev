// InputComponent is a reusable input field that supports
// text inputs and date pickers, with optional icon buttons.
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Input1Component implements OnInit {
  @Input() inputType: string = 'text';
  @Input() iconName: string | null = null;
  @Input() useDatepicker: boolean = false;
  @Input() placeholder: string = '';

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-US');
  }

  ngOnInit(): void { }
}
