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
          Validators.minLength(4)])
    })
  }

  metodSubmit() {
      if (this.perForm.valid) {
          console.log('perForm', this.perForm);
          const fp = (this.perForm.value)
          console.log('fp', fp);
      }
  }
}
