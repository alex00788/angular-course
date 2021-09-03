import {Component, forwardRef, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


const V_A: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
}

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [V_A]
})
export class SwitchComponent implements ControlValueAccessor {

  per = 'off'

  private onCh = (value: any) => {}

  setPer (per2: string) {
    this.per = per2
    this.onCh(this.per)
  }

  registerOnChange(fn: any): void {
    this.onCh = fn
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(per3: string): void {
    this.per = per3
  }
}
