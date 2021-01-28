import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  codeSample = `ngOnInit(): void {
    // Form field subscribes to self
    // In FormGroup
    this.anotherForm.controls.scoops.valueChanges.subscribe(value => {
      this.anotherForm.controls.scoops.setValue(value, {
        onlySelf: true, emitEvent: false, emitModelToViewChange: true
      });
    }, error => { }, () => { });

    // Standalone FormControl
    this.flavour.valueChanges.subscribe(value => {
      this.flavour.setValue(value, {
        onlySelf: true, emitEvent: false, emitModelToViewChange: true
      });
    }, error => { }, () => { });
  }`

  yourName: FormControl = new FormControl('');
  flavour: FormControl = new FormControl('');

  aForm = new FormGroup({
    age: new FormControl()
  });

  anotherForm = new FormGroup({
    scoops: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {

    // Form field subscribes to self
    // In FormGroup
    this.anotherForm.controls.scoops.valueChanges.subscribe(value => {
      this.anotherForm.controls.scoops.setValue(value, { onlySelf: true, emitEvent: false, emitModelToViewChange: true });
    }, error => { }, () => { });

    // Standalone FormControl
    this.flavour.valueChanges.subscribe(value => {
      this.flavour.setValue(value, { onlySelf: true, emitEvent: false, emitModelToViewChange: true });
    }, error => { }, () => { });

  }

}
