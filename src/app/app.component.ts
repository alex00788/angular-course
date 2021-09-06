import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';



@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  perForm: FormGroup;

  ngOnInit() {
    this.perForm = new FormGroup({
      email:  new FormControl('', [
          Validators.email,
          Validators.required,
          MyValidators.badEmail
      ], MyValidators.uniqEm),

      password:  new FormControl(null, [
          Validators.required,
          Validators.minLength(4)]),

    address: new FormGroup({
      strana: new FormControl('ru'),
      gorod: new FormControl('Moscow', Validators.required)
      }),
    skills: new FormArray([])
    })
  }

  metodSubmit() {
      console.log('metodSubmit');
    if (this.perForm.valid) {
       console.log('perForm', this.perForm);
       const fp = (this.perForm.value);
       console.log('fp', fp);
        this.perForm.reset();
    }
  }

  metod() {
      return [
         { abr: 'ru', name: 'Россия', capital: 'Москва'},
         { abr: 'ua', name: 'Украина', capital: 'Киев'},
         { abr: 'by', name: 'Беларусь', capital: 'Минск'},
      ]
  }

  setCountry() {
    const perSetCiti = {
      ru: 'Moscow',
      by: 'Минск',
      an: 'англия'
    }
      const perKluch = this.perForm.get('address').get('strana').value
      const perGorod = this.metod()
          .filter( ( perAny1 ) => perAny1.abr === perKluch)
          .map( perAny22 => perAny22.capital)
      this.perForm.patchValue({address: {gorod: perGorod + ' и что угодно'}})
  }

  changeCity() {
        this.setCountry()
  }

    addSkill() {
        const control = new FormControl('', Validators.required);
        // (<FormArray>this.form.get('skills')).push(control)
        (this.perForm.get('skills') as FormArray).push(control)
    }
}
