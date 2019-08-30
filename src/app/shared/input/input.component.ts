import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showTip: boolean = true;

  input: any;

  @ContentChild(NgModel, /* TODO: add static flag */ {static: false}) model: NgModel;
  @ContentChild(FormControlName, /* TODO: add static flag */ {static: false}) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control;
    if(this.input === undefined) {
      throw new Error('Esse conponente precisa ser usado com uma diretiva ngModel ou formControlName');
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
