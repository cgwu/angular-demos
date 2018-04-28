import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

/*
  Our custom validator
  A validator:
  - Take a `Control` as it's input and
  - Returns a `StringMap<string, boolean>` where the key is "error code" and
    the value is `true` if it fails.
*/
function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidSku: true };
  }
}


@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([ Validators.required, skuValidator ])],
      'foo': ['']
    });
    this.sku = this.myForm.controls['sku'];

    // Both FormGroup and FormControl have an EventEmitter that we can use to observe changes.
    // 1. get access to the EventEmitter by calling control.valueChanges
    // 2. add an observer using the .subscribe method.
    this.sku.valueChanges.subscribe((value: string)=>{
      console.log('sku changed to:', value);
    });

    this.myForm.valueChanges.subscribe((form: any)=>{
      console.log('myForm changed to:', form);
    });

  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
