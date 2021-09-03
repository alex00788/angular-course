import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  perForm: FormGroup

  ngOnInit() {
    this.perForm = new FormGroup({
      email:  new FormControl('', [
          Validators.email,
          Validators.required]),
        password:  new FormControl(null, [
          Validators.required,
          Validators.minLength(4)]),

        address: new FormGroup({
            strana: new FormControl('by'),
            gorod: new FormControl('Moscow', Validators.required)
        })
    })
  }

  metodSubmit() {
      if (this.perForm.valid) {
          console.log('perForm', this.perForm);
          const fp = (this.perForm.value)
          console.log('fp', fp);
      }
  }

    setStrana() {
        const perSetGorod = {
            ru: 'Moscow',
            by: 'Минск'
        }
        const perGorodKluch = this.perForm.get('address').get('strana').value
        const perGorod = perSetGorod [perGorodKluch]
        console.log(perGorod);
        this.perForm.patchValue({
            address: {gorod: perGorod}})
    }
}
